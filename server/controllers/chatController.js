require("dotenv").config();
const jwt = require("jsonwebtoken");
const ChatSave = require("../models/ChatSave");
const run = require("../geminiApi");
const mongoose = require("mongoose")




exports.geminiPrompt = async (req, res) => {
    try {
        // Extract token from headers
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ success: false, message: "Access Denied: No token provided" });
        }

        // Verify token
        const verified = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);
        req.user = verified;

        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ success: false, message: "Prompt is required" });
        }

        const userId = req.user.userId;

        // Call the Gemini API
        const response = await run(prompt);
        // Find existing user searches
        let usersearch = await ChatSave.findOne({ userId });

        if (!usersearch) {
            usersearch = new ChatSave({ userId, searches: [{ query: prompt, result: response }] });
        } else {
            usersearch.serches.unshift({ query: prompt, result: response });
        }

        await usersearch.save();

        return res.json({
            success: true,
            message: "Search saved successfully",
            response,
            usersearch,
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};




exports.getAllchats = async (req, res) => {
    try {

        // Extract token from headers
        const token = req.header("Authorization");
        if (!token) {
            return res.status(401).json({ success: false, message: "Access Denied: No token provided" });
        }

        // Verify token
        const decoded = jwt.verify(token.replace("Bearer ", ""), process.env.JWT_SECRET);

        if (!decoded || !decoded.userId) {
            return res.status(401).json({ success: false, message: "Invalid token or userId missing" });
        }

        req.user = decoded;
        const userId = req.user.userId;


        // Find all saved searches for the user
        const userSearches = await ChatSave.findOne({ userId });

        if (!userSearches) {
            return res.status(404).json({ success: false, message: "No search history found" });
        }

        return res.json({
            success: true,
            message: "Search history retrieved successfully",
            searches: userSearches.serches, // Send only the searches array
        });



    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
}



exports.getSingleChat = async (req, res) => {
    try {
        const { userId, queryId } = req.params;

        //  Validate ObjectId format
        
        if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(queryId)) {
            return res.status(400).json({ success: false, message: "Invalid ID format." });
        }

        //  Find the user and search for the specific query
        const userChats = await ChatSave.findOne({ userId });

        if (!userChats) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        //  Find the query in the `serches` array
        const foundQuery = userChats.serches.find(q => q._id.toString() === queryId);

        if (!foundQuery) {
            return res.status(404).json({ success: false, message: "Query not found." });
        }

        //  Return the found query
        return res.json({ success: true, query: foundQuery });

    } catch (error) {
        console.error("Error fetching query:", error);
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
}




exports.deleteSingleChat = async (req, res) => {
    try {
        const { userId, queryId } = req.params;

        //  Validate ObjectId format
        if (!mongoose.Types.ObjectId.isValid(userId) || !mongoose.Types.ObjectId.isValid(queryId)) {
            return res.status(400).json({ success: false, message: "Invalid ID format." });
        }

        //  Remove the query from the `serches` array
        const updatedUser = await ChatSave.findOneAndUpdate(
            { userId },
            { $pull: { serches: { _id: queryId } } }, // Remove query by `_id`
            { new: true } // Return updated document
        );

        // If user not found
        if (!updatedUser) {
            return res.status(404).json({ success: false, message: "User not found." });
        }

        return res.json({ success: true, message: "Query deleted successfully.", updatedUser });

    } catch (error) {
        console.error("Error deleting query:", error);
        return res.status(500).json({ success: false, message: "Internal server error", error: error.message });
    }
};