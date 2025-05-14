import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "./Loader";

const ForgotPassEmail = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true)

    const handleContinue = async () => {
        // alert(`Password reset link sent to ${email}`);
        // Add password reset logic here
        setLoading(false)
        try {
            await axios.post(`http://localhost:4000/api/auth/request-password-reset`, { email });
            toast.success("Please check your email.");
            navigate("/reset-password")
        } catch (error) {
            console.log(error)
            toast.error("Error in forGetPassword.");
        }
        setLoading(true)
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gradient-to-r from-gray-900 to-gray-700">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-96 text-center transform transition duration-500 ">
                <h2 className="text-3xl font-semibold text-gray-800">Forgot Password</h2>
                <p className="text-gray-500 mt-2">Enter your email to reset your password</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-4 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {
                    loading ? (<>
                        <button
                            onClick={handleContinue}
                            className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition transform hover:scale-110"
                        >
                            Send Otp
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

export default ForgotPassEmail;
