import React, { useContext, useRef, useState } from "react";
import { FaGoogle, FaGithub, FaTimes } from "react-icons/fa";
import { UserAppContext } from "../context/UserAppContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import Loader from "./Loader";

const ProfileSettings = () => {
  const { user, setUser } = useContext(UserAppContext);
  const navigate = useNavigate();
  const fileInputRef = useRef(null); // Ref for file input
  const [loading, setLoading] = useState(true);


  const UpdateProfilePic = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      toast.error("No file selected!");
      return;
    }

    const formData = new FormData();
    formData.append("profilePic", file);
    setLoading(false)
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token missing!");
        return;
      }

      const res = await axios.post(
        "http://localhost:4000/api/auth/upload-profile-pic",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Response:", res.data); // Debugging log
      setUser((prevUser) => ({ ...prevUser, profilePic: res.data.profilePic })); // Update state
      toast.success("Profile pic updated successfully!");
    } catch (error) {
      console.error("Error updating profile pic:", error);
      toast.error(error.response?.data?.message || "Error updating profile picture");
    }
    setLoading(true)
  };

  return (
    <div className="flex h-screen bg-gray-50 mt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-white p-6 border-r shadow-sm flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Account</h2>
          <p className="text-gray-500 text-sm mt-1">Manage your account info.</p>
          <nav className="mt-6">
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-purple-600 font-medium bg-purple-100 px-3 py-2 rounded-md">
                <span className="h-5 w-5 flex items-center justify-center text-xs">👤</span>
                Profile
              </li>
            </ul>
          </nav>
        </div>
        <footer className="text-gray-400 text-sm">
          Secured by <span className="font-semibold text-gray-500">Nexa Ai</span>
        </footer>
      </aside>

      {/* Main Profile Section */}
      <main className="flex-1 p-8 bg-white shadow-lg rounded-xl m-6 relative">
        {/* Close Button */}
        <button onClick={() => navigate("/")} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <FaTimes size={20} />
        </button>

        {/* Profile Details */}
        <h2 className="text-2xl font-semibold text-gray-800">Profile details</h2>

        <div className="mt-6">
          {/* Profile */}
          <div className="flex items-center justify-between pb-4 border-b">
            <div className="flex items-center gap-4">
              <img
                src={user?.profilePic || "https://via.placeholder.com/150"}
                alt="Profile"
                className="w-12 h-12 rounded-full"
              />
              <span className="text-lg font-medium text-gray-800">{user?.name || "User"}</span>
            </div>

            {/* Hidden File Input */}
            <input type="file" ref={fileInputRef} className="hidden" onChange={UpdateProfilePic} />

            {/* Trigger File Upload */}
            {
              loading ? (<>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="text-purple-600 font-medium hover:underline"
                >
                  Update profile
                </button>
              </>) : (<>
                <button
                  className="text-purple-600 font-medium hover:underline"
                >
                  <Loader />
                </button>
              </>)
            }
          </div>

          {/* Email Addresses */}
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium">Email addresses</h3>
            <p className="text-gray-800">
              {user?.email || "No email found"}{" "}
              <span className="text-xs bg-gray-200 px-2 py-1 rounded ml-2">Primary</span>
            </p>
            <button className="text-purple-600 font-medium hover:underline mt-1">
              + Add email address
            </button>
          </div>

          {/* Phone Numbers */}
          <div className="py-4 border-b">
            <h3 className="text-gray-600 font-medium">Phone numbers</h3>
            <p className="text-gray-600 font-medium">{user?.phone || "No phone number"}</p>
            <button className="text-purple-600 font-medium hover:underline">
              + Add phone number
            </button>
          </div>

          {/* Connected Accounts */}
          <div className="py-4">
            <h3 className="text-gray-600 font-medium">Connected accounts</h3>
            <div className="flex items-center gap-3 text-gray-800 mt-2">
              <FaGoogle className="text-red-500" />
              Google - {user?.email || "Not connected"}
            </div>
            <div className="flex items-center gap-3 text-gray-800 mt-2">
              <FaGithub className="text-gray-800" />
              GitHub - {user?.github || "Not connected"}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProfileSettings;
