
import React, { useContext } from "react";
import { UserAppContext } from "../context/UserAppContext";
import { useNavigate } from "react-router-dom";
import { FaCog, FaSignOutAlt } from "react-icons/fa";

const Profile = () => {

  const { user, logout } = useContext(UserAppContext);
  const navigate = useNavigate()

  const handleLogout = () => {
    logout();
    navigate("/")
  };

  return (
    

    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg p-4 mt-20">
      {/* User Info */}
      <div className="flex items-center gap-3">
        <img
          src={user.profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">{user.name}</h2>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button onClick={() => navigate("/profile-setting")} className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition">
          <FaCog />
          Manage account
        </button>
        <button onClick={handleLogout} className="flex items-center justify-center gap-2 w-full bg-gray-100 text-gray-700 px-3 py-2 rounded-md hover:bg-gray-200 transition">
          <FaSignOutAlt />
          Sign out
        </button>
      </div>

      {/* Footer */}
      <div className="mt-3 text-center text-gray-400 text-sm mb-5">
        Secured by <span className="font-semibold text-gray-500">Nexa Ai</span>
      </div>
    </div>

  );
};

export default Profile;