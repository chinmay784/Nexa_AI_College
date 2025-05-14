import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAppContext } from "../../context/UserAppContext";
import axios from "axios";
import { toast } from "react-toastify";
import Loader from "../Loader";

function SignUp() {
  const { login } = useContext(UserAppContext)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("")
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const handleEvent = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(false)
    try {
      const res = await axios.post(`http://localhost:4000/api/auth/signup`, { name, email, phone, password })
      console.log(res.data.token)
      login(res.data.token, res.data.user)
      navigate('/verify-otp', { state: { email } })
      toast.success("User Register SucessFully")
    } catch (error) {
      console.log(error)
      setError(error.response?.data?.message || "Signup failed");
      toast.error("Signup faild");
    }
    setLoading(true)

    console.log("Form submitted");
  };

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-400 relative pb-32">
        <div className="absolute top-4 left-6 flex justify-center items-center gap-2">
          <svg
            height="200px"
            width="200px"
            viewBox="0 0 492.481 492.481"
            fill="#000000"
            className="w-6 h-6"
          >
            <linearGradient
              id="SVGID_1_"
              gradientUnits="userSpaceOnUse"
              x1="-36.6002"
              y1="621.3422"
              x2="-17.2782"
              y2="547.7642"
              gradientTransform="matrix(7.8769 0 0 -7.8769 404.0846 4917.9966)"
            >
              <stop offset="0" style={{ stopColor: "#29D3DA" }}></stop>
              <stop offset="0.519" style={{ stopColor: "#0077FF" }}></stop>
              <stop offset="0.999" style={{ stopColor: "#064093" }}></stop>
              <stop offset="1" style={{ stopColor: "#084698" }}></stop>
            </linearGradient>
          </svg>
          <p className="text-2xl text-indigo-500 tracking-wide font-bold">Logo</p>
        </div>
        <div className="w-full rounded-lg bg-slate-900 p-10 text-sm text-indigo-300 sm:w-96 max-w-96 mt-16">
          <h1 className="mb-4 text-center text-3xl font-semibold text-white">
            Create Account
          </h1>
          <p className="mb-6 text-center text-md">Create your account now!</p>
          <form onSubmit={handleEvent}>
            <div className="mb-5 flex gap-3 rounded-full bg-[#333A5c] px-6 py-3">
              <input
                type="text"
                placeholder="Full Name"
                className="border-none outline-none bg-transparent text-white w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-5 flex gap-3 rounded-full bg-[#333A5c] px-6 py-3">
              <input
                type="email"
                placeholder="Email"
                className="border-none outline-none bg-transparent text-white w-full"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="mb-5 flex gap-3 rounded-full bg-[#333A5c] px-6 py-3">
              <input
                type="text"
                placeholder="Phone"
                className="border-none outline-none bg-transparent text-white w-full"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>
            <div className="mb-5 flex gap-3 rounded-full bg-[#333A5c] px-6 py-3">
              <input
                type="password"
                placeholder="Password"
                className="border-none outline-none bg-transparent text-white w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {
              loading ? (<>
                <button
                  type="submit"
                  className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 py-3 font-medium tracking-wide text-white cursor-pointer"
                >
                  Sign Up
                </button>
              </>) : (<>
                <button

                  className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 py-3 font-medium tracking-wide text-white cursor-pointer"
                >
                  <Loader />
                </button>
              </>)
            }
          </form>
          <p className="mt-4 mb-7 text-center text-sm text-slate-400">
            Already Have an account?{" "}
            <Link
              to={"/login"}
              className="hover:underline text-blue-400"
            >
              Login
            </Link>
          </p>
          <span className="block w-full h-0.5 bg-gradient-to-r from-slate-900 via-indigo-500 to-slate-900"></span>
        </div>
      </div>

      <Link
        to="/"
        className="absolute bottom-8 translate-y-10 lg:left-[560px] left-1/2 transform -translate-x-1/2 sm:left-8 sm:translate-x-0"
      >
        <button className="px-6 py-2 rounded-full bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition-all duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default SignUp;
