import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";

const PassWordSet = () => {

    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('')
    const [newPassword, setNewPassword] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    const handleContinue = async () => {
        setLoading(false)
        try {
            await axios.post(`https://nexa-ai-college.onrender.com/api/auth/reset-password`, { email, otp, newPassword });
            toast.success("Password reset Sucessfully");
            navigate("/login")
        } catch (error) {
            console.log(error)
            toast.error("Error in PasswordSet")
        }
        setLoading(true)
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 text-center transform transition duration-500 hover:scale-105 shadow-gray-900">
                <h2 className="text-3xl font-semibold text-gray-800">Set New Password</h2>
                <p className="text-gray-500 mt-2">Enter and confirm your new password</p>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Enter Otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="password"
                    placeholder="New Password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {
                    loading ? (<>
                        <button
                            onClick={handleContinue}
                            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-110"
                        >
                            Continue
                        </button>
                    </>) : (<>
                        <button
                            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-110"
                        >
                           <Loader />
                        </button>
                    </>)
                }
            </div>
        </div>
    );
};

export default PassWordSet;
