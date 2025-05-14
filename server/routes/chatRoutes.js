const express = require("express");
const authMiddleware = require("../middleware/authMiddleware");
const { geminiPrompt, getAllchats, deleteSingleChat, getSingleChat } = require("../controllers/chatController");
const router = express.Router();


router.post("/search", authMiddleware, geminiPrompt);
router.get("/allsearch", getAllchats)
router.get("/:userId/query/:queryId", getSingleChat);
router.delete("/:userId/query/:queryId", deleteSingleChat)

module.exports = router;


// http://localhost:4000/api/chat/search  (In headers you have to give Authorization: your_token)
// http://localhost:4000/api/chat/allsearch
// http://localhost:4000/api/chat/:userId/query/:queryId
// http://localhost:4000/api/chat/:userId/query/:queryId