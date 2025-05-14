import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

export const UserAppContext = createContext();

const UserAppProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    // const navigate = useNavigate();

    // Function to fetch user profile
    const fetchUserProfile = async (token) => {
        try {
            const response = await axios.get(`http://localhost:4000/api/auth/profile`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            setUser(response.data);
        } catch (err) {
            console.error("Error fetching profile:", err);
            logout(); // Logout on invalid token
        }
    };

    // Fetch user profile when token changes
    useEffect(() => {
        if (token) {
            fetchUserProfile(token);
        }
    }, [token]);

    // Login function
    const login = (token, userData) => {
        if (!token) {
            console.error("No token received");
            return;
        }
        console.log("User logged in with token:", token);
        localStorage.setItem("token", token);
        setToken(token);
        setUser(userData);

        // Fetch profile immediately after login
        fetchUserProfile(token);

        // Redirect user after login
        // navigate("/profile");
    };

    // Logout function
    const logout = () => {
        setUser(null);
        setToken("");
        localStorage.removeItem("token");
        toast.success("Logout Successfully");
        // navigate("/");
    };

    return (
        <UserAppContext.Provider value={{ user, token, login, logout,setUser }}>
            {children}
        </UserAppContext.Provider>
    );
};

export default UserAppProvider;
