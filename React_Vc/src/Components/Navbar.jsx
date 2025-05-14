import React, { useContext } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css'
import { UserAppContext } from "../context/UserAppContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(UserAppContext)

  return (
    <nav className="  shadow-md p-4 fixed w-full top-0 z-50" >
      <div className="Lt container mx-auto flex justify-between lg:justify-center items-center">
        {/* Logo or Brand Name */}
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl lg:-ml-[270px] font-bold text-blue-600">
              Nexa AI
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="Link hidden md:flex  space-x-6 lg:ml-[200px]">
          <Link to="Home" className="text-white hover:text-blue-600">
            <ScrollLink
              to="Home"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Home
            </ScrollLink>
          </Link>
          <Link to="#" smooth className="text-white hover:text-blue-600">
            <ScrollLink
              to="features"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Services
            </ScrollLink>
          </Link>
          <Link to="#" className="text-white hover:text-blue-600">
            <ScrollLink
              to="Prices"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Prices
            </ScrollLink>
          </Link>
          <Link to="#" className="text-white hover:text-blue-600">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Contact
            </ScrollLink>
          </Link>
        </div>

        <div className="Link hidden  lg:translate-x-[250px] lg:block lg:space-x-4">


          {
            user ? (
              <div className="flex items-center gap-4 justify-around">
                {/* Profile Picture */}
                <Link to={'/profile'}>
                  <img
                    src={user.profilePic}
                    className="w-12 h-12 md:w-12 md:h-12 rounded-full border-4 border-blue-500 shadow-lg transition-transform transform hover:scale-105 hover:border-blue-700"
                    alt="Profile"
                  />
                </Link>

                {/* Profile & Logout Options */}
                <div className="flex items-center gap-5">

                  <button
                    onClick={logout}
                    className="mt-1 px-4 py-1 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* Sign Up Button */}
                <Link to="/signup">
                  <button className="relative px-4 py-2 rounded-md border-2 border-blue-700 text-white font-semibold shadow-md overflow-hidden transition duration-500 hover:border-red-500 hover:text-red-500">
                    Sign Up
                  </button>
                </Link>

                {/* Login Button */}
                <Link to="/login">
                  <button className="relative px-4 py-2 rounded-md border-2 border-blue-700 text-white font-semibold shadow-md overflow-hidden transition duration-500 hover:border-red-500 hover:text-red-500">
                    Log In
                  </button>
                </Link>
              </div>
            )
          }

        </div>

        {/* Mobile Menu Button - Replacing peer logic with React state */}
        <button
          className="flex flex-col gap-2 w-8 md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 transition-all ${isOpen
              ? "rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]"
              : ""
              }`}
          ></div>

          <div
            className={`rounded-2xl h-[3px] w-full bg-white duration-500 transition-all ${isOpen ? "opacity-100 rotate-[-225deg]" : "opacity-100"
              }`}
          ></div>
          <div
            className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 transition-all place-self-end ${isOpen
              ? "rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]"
              : ""
              }`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="Link md:hidden absolute top-16 left-0 w-full bg-blue-300 shadow-md"
        >
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link
              to="Home"
              className="text-white hover:text-blue-600"
            >
              <ScrollLink
                to="Home"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Home
              </ScrollLink>
            </Link>
            <Link
              to="/"
              className="text-white hover:text-blue-600"

            >
              <ScrollLink
                to="features"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Services
              </ScrollLink>
            </Link>
            <Link
              to="#"
              className="text-white hover:text-blue-600"

            >
              <ScrollLink
                to="Prices"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Prices
              </ScrollLink>
            </Link>
            <Link
              to="#"
              className="text-white hover:text-blue-600"

            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Contact
              </ScrollLink>
            </Link>
            <Link to="/login"  smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)} className="text-white hover:text-blue-600">
              Log In
            </Link>
            <Link to="/signup"  smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)} className="text-white hover:text-blue-600">
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}

    </nav>
  );
}
