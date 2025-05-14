"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";



export const LampContainer = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn(
        "relative  flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black  rounded-md z-0",
        className
      )}>
      <div
        className=" -mt-80 relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
        
        
        
        <div
          className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36  w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto  z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400 "></motion.div>

        <div
          className="absolute  inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
      </div>
      <div className="relative  z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>)
  );
};
