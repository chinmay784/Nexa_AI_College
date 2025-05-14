import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserAppContext } from "../../context/UserAppContext";
import Loader from "../Loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(UserAppContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(false)
    try {
      const res = await axios.post('http://localhost:4000/api/auth/login', { email, password })
      console.log(res.data.token)
      login(res.data.token, res.data.user);
      navigate("/");
      toast.success("Login successful")
    } catch (error) {
      console.log(error)
      toast.error("Login Failed")
    }
    setLoading(true)
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-200 to-purple-400 relative pb-32">
      <div className="absolute top-4 left-6 flex justify-center items-center gap-2">
        <svg
          height="40px"
          width="40px"
          viewBox="0 0 492.481 492.481"
          fill="#000000"
          className="w-6 h-6"
        >
          <polygon fill="#0077FF" points="25.687,297.141 135.735,0 271.455,0 161.398,297.141" />
          <polygon fill="#DA498C" points="123.337,394.807 233.409,97.674 369.144,97.674 259.072,394.807" />
          <polygon fill="#0077FF" points="221.026,492.481 331.083,195.348 466.794,195.348 356.746,492.481" />
        </svg>
        <p className="text-2xl text-indigo-500 tracking-wide font-bold">Logo</p>
      </div>
      <div className="w-full rounded-lg bg-slate-900 p-10 text-sm text-indigo-300 sm:w-96 max-w-96 mt-18">
        <h1 className="mb-4 text-center text-3xl font-semibold text-white">Login</h1>
        <p className="mb-6 text-center text-sm">Welcome Back!</p>
        <form onSubmit={handleSubmit}>
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
              type="password"
              placeholder="Password"
              className="border-none outline-none bg-transparent text-white w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <p className="mb-6 text-sm flex justify-end cursor-pointer">
            <Link to={"/forget-password"} className="text-blue-400">Forgot Password?</Link>
          </p>
          {
            loading ? (<>
              <button className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 py-3 font-medium tracking-wide text-white cursor-pointer">
                Login
              </button>
            </>) : (<>
              <button className="w-full rounded-full bg-gradient-to-r from-indigo-400 to-indigo-900 py-3 font-medium tracking-wide text-white cursor-pointer">
              <Loader />
              </button>
            </>)
          }
        </form>
        <p className="mt-4 mb-7 text-center text-sm text-slate-400">
          Don't Have an account? <Link to={"/signup"} className="hover:underline text-blue-400">Sign Up</Link>
        </p>
        <span className="block w-full h-0.5 bg-gradient-to-r from-slate-900 via-indigo-500 to-slate-900"></span>
      </div>

      <Link
  to="/"
  className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:left-[560px] sm:left-8 sm:translate-x-0 "
>
  <button className="px-6 py-2 rounded-full bg-amber-500 text-white font-semibold shadow-md hover:bg-amber-600 transition-all duration-300 ">
    Back to Home
  </button>
</Link>
    </div>
  );
};

export default Login;
