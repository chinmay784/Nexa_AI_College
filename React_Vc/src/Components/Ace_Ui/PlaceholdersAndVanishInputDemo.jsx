"use client";


import React from "react";
import { PlaceholdersAndVanishInput } from "./PlaceholdersAndVanishInput";

export function PlaceholdersAndVanishInputDemo() {
  const placeholders = [
    "What's the first rule of Fight Club?",
    "Who is Tyler Durden?",
    "Where is Andrew Laeddis Hiding?",
    "Write a Javascript method to reverse a string",
    "How to assemble your own PC?",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };
  return (
    (<div className="h-[40rem] -mt-[300px] flex flex-col justify-center  items-center px-4">
      <h2
        className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl dark:text-white text-black">
        
      </h2>
      <PlaceholdersAndVanishInput placeholders={placeholders} onChange={handleChange} onSubmit={onSubmit} />
    </div>)
  );
}
