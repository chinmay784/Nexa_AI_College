import "./App.css";
import React, { useContext } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Navbar from "./Components/Navbar";
import Home from "./Home";
import Login from "./Components/Pages/Login";
import SignUp from "./Components/Pages/SignUp";
import Otp from "./Components/Pages/Otp";
import Profile from "./Components/Profile";
import Voice from './Components/Pages/Voice';
import SearchAi from "./Components/Ace_Ui/SearchAi";
import ForgotPassEmail from "./Components/ForgotPassEmail";
import PassWordSet from "./Components/PassWordSet";
import ProfileSettings from "./Components/ProfileSettings";
import Details from "./Components/Details";
import { UserAppContext } from "./context/UserAppContext";

function App() {
  const { user } = useContext(UserAppContext);

  return (
    <BrowserRouter>
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<Otp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forget-password" element={<ForgotPassEmail />} />
        <Route path="/reset-password" element={<PassWordSet />} />

        {/* Protected Routes (Only accessible if user is logged in) */}
        {user && (
          <>
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile-setting" element={<ProfileSettings />} />
            <Route path="/search-ai" element={<SearchAi />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/listen-ai" element={<Voice />} />
          
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
