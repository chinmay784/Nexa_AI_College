import React from "react";
import { Link } from "react-router-dom";

function LinesBg() {
  return (
    <div  className="flex flex-col items-center justify-center px-4 sm:px-8 mt-5">
      <h2 className="mt-32 sm:mt-40 md:mt-48 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold py-2 md:py-6 lg:py-10 relative z-20 tracking-tight">
        We're Nexa. We Develop Custom AI Solutions
      </h2>
      <h2 className="-mt-6 sm:-mt-10 md:-mt-12 bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans py-2 md:py-6 lg:py-10 relative z-20 font-bold tracking-tight">
        For Innovation Technology.
      </h2>

      <div className="flex gap-4 sm:gap-6 lg:gap-8 justify-center mt-6 sm:mt-8 lg:mt-10">
        <button className="relative h-12 px-6 sm:px-8 rounded-lg overflow-hidden transition-all duration-500 group">
          <div className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-b from-[#ffffff] via-[#ffffff] to-[#c6c6c6]">
            <div className="absolute inset-0 bg-[#dfdfdf] rounded-lg opacity-90"></div>
          </div>
          <div className="absolute inset-[2px] bg-[#170928] rounded-lg opacity-95"></div>
          <div className="absolute inset-[2px] bg-gradient-to-r from-[#020104] via-[#1d0d33] to-[#170928] rounded-lg opacity-90"></div>
          <div className="absolute inset-[2px] bg-gradient-to-b from-[#654358]/40 via-[#1d0d33] to-[#2F0D64]/30 rounded-lg opacity-80"></div>
          <div className="absolute inset-[2px] bg-gradient-to-br from-[#C787F6]/10 via-[#1d0d33] to-[#2A1736]/50 rounded-lg"></div>
          <div className="absolute inset-[2px] shadow-[inset_0_0_15px_rgba(199,135,246,0.15)] rounded-lg"></div>
          <div  className="relative flex items-center justify-center gap-2 px-4 sm:px-6">
            <span className="text-lg sm:text-xl font-normal bg-gradient-to-b from-[#ffffff] to-[#5a5a5b] bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(199,135,246,0.4)] tracking-tighter">
           <Link to="#features">Scroll Down !!</Link>
            </span>
          </div>
          <div className="absolute inset-[2px] opacity-0 transition-opacity duration-300 bg-gradient-to-r from-[#2A1736]/20 via-[#C787F6]/10 to-[#2A1736]/20 group-hover:opacity-100 rounded-lg"></div>
        </button>
      </div>
    </div>
  );
}

export default LinesBg;
