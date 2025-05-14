import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loader from "../Loader";

function Otp() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.email;
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true)

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (!isNaN(value) && value.length <= 1) {
      let newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !otp[index] && index > 0) {
      let newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSubmit = async () => {
    setError("");
    setLoading(false)
    if (!email) {
      setError("Email is missing. Please try signing up again.");
      toast.error("Email missing. Try again.");
      return;
    }

    const otpString = otp.join(""); // Convert array to string

    if (otpString.length !== 6) {
      setError("Please enter a 6-digit OTP.");
      toast.error("Enter a valid 6-digit OTP.");
      return;
    }

    try {
      const response = await axios.post(`http://localhost:4000/api/auth/verify-otp`, { email, otp: otpString });

      toast.success("OTP verified successfully!");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (error) {
      console.error("OTP Verification Error:", error.response?.data || error.message);
      toast.error("OTP verification failed. Please try again.");
    }
    setLoading(true)
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-gradient-to-br bg-black">
      <div className="absolute top-4 left-6 flex items-center justify-center gap-2">
        <p className="text-2xl font-bold tracking-wide text-indigo-500">Logo</p>
      </div>
      <div className="lg:w-[450px] rounded-lg bg-slate-900 p-10 text-sm text-red-300 sm:w-96 mt-16">
        <h1 className="mb-4 text-center text-3xl font-semibold text-white">Verification Code</h1>
        <p className="mb-6 text-center text-sm">Enter the 6-digit code we've sent to your mail</p>

        <div className="flex mb-6 gap-4 justify-center">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-${index}`}
              type="text"
              value={digit}
              onChange={(e) => handleChange(index, e)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="otp-input outline-none w-12 h-12 rounded-sm text-center bg-[#333A5c] font-base text-xl border-b-2 border-blue-300"
              maxLength="1"
              required
            />
          ))}
        </div>

        {error && <p className="text-center text-red-400">{error}</p>}

        {
          loading ? (<>

            <button
              onClick={handleSubmit}
              className="w-full cursor-pointer rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 py-3 font-medium tracking-wide text-white"
            >
              Verify
            </button>
          </>) : (<>
            <button
              className="w-full cursor-pointer rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 py-3 font-medium tracking-wide text-white"
            >
              <Loader />
            </button>
          </>)
        }

        <p className="mt-5 text-center text-sm">
          <Link className="flex items-center justify-center gap-2 text-slate-400 hover:underline">
            <span>Back to log in</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Otp;
