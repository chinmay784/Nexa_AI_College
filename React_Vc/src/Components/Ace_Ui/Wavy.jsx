"use client";
import React from "react";
import { WavyBackground } from "./wavy-background";
import Button from "./Button";
import Button1 from "./Button1";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserAppContext } from "../../context/UserAppContext";

export function Wavy() {

  const { user } = useContext(UserAppContext)

  return (
    <WavyBackground className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-32">
      {/* Title */}
      <p
        className="text-4xl sm:text-4xl md:text-5xl lg:text-[90px] xl:text-[100px] 
        font-bold inter-var bg-clip-text text-transparent text-center 
        bg-gradient-to-b from-neutral-900 to-neutral-700 
        dark:from-neutral-600 dark:to-white mt-16 sm:mt-20"
      >
        NEXA AI STUDIO
      </p>

      {/* Subtitle */}
      <p
        className="text-sm sm:text-base md:text-lg font-sans text-gray-100 text-center inter-var mt-3 sm:mt-5"
      >
        AI-Powered Assistant For Efficiency, Automation, And Seamless User Experience.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row mt-8 sm:mt-12 gap-4 sm:gap-8 justify-center items-center">
        <Link to={user ? "/" :"/SignUp"}>
          <Button />
        </Link>
        <Button1 />
      </div>
    </WavyBackground>
  );
}
