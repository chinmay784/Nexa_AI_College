import { useState } from "react";
import React from "react";


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <label className="cursor-pointer block w-12 h-12 flex items-center justify-center">
      <input
        type="checkbox"
        className="hidden"
        checked={isOpen}
        onChange={() => setIsOpen(!isOpen)}
      />
      <svg
        viewBox="0 0 32 32"
        className={`h-12 transition-transform duration-600 ease-in-out ${isOpen ? "rotate-[-45deg]" : "rotate-0"}`}
      >
        <path
          className="stroke-white stroke-[3] fill-none stroke-linecap-round stroke-linejoin-round transition-all duration-600 ease-in-out"
          strokeDasharray={isOpen ? "20 300" : "12 63"}
          strokeDashoffset={isOpen ? "-32.42" : "0"}
          d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
        ></path>
        <path
          className="stroke-white stroke-[3] fill-none stroke-linecap-round stroke-linejoin-round transition-all duration-600 ease-in-out"
          d="M7 16 27 16"
        ></path>
      </svg>
    </label>
  );
};

export default HamburgerMenu;
