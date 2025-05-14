"use client";
import "./Alt.css";
import React, { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

export const InfiniteMovingCards1 = ({
  items,
  speed = "fast",
  pauseOnHover = true,
}) => {
  const scrollerRef = useRef(null);
  const [duplicatedItems, setDuplicatedItems] = useState([]);

  useEffect(() => {
    // Duplicate items for seamless scrolling
    setDuplicatedItems([...items, ...items]);
  }, [items]);

  // Define speed dynamically
  const speedClass =
    speed === "fast" ? "duration-[20s]" : speed === "normal" ? "duration-[40s]" : "duration-[80s]";

  return (
    <div className="scrollerr relative max-w-7xl overflow-hidden">
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-4 py-4 h-[250px] w-max flex-nowrap animate-scroll-left ${speedClass} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            key={idx}
            className=" w-[350px] max-w-full rounded-2xl border border-slate-700 px-6 py-8 md:w-[450px] bg-gradient-to-r from-black via-black text-gray-700 shadow-xl flex-shrink-0"
          >
           <div className="flex flex-col items-center gap-4">
                        <div className="text-center">
                          <p className="text-lg italic font-medium break-words text-gray-200">"{item.quote}"</p>
                        </div>
          
                        <div className="flex items-center gap-1 text-yellow-400">
                          {[...Array(5)].map((_, starIdx) => (
                            <Star key={starIdx} size={20} fill={starIdx < (item.rating || 5) ? "currentColor" : "none"} />
                          ))}
                        </div>
          
                        <div className=" border-amber-600 mt-4 text-center">
                          <p className="text-xl font-bold break-words text-white mt-2">{item.name}</p>
                          <p className="text-sm text-gray-400 break-words">{item.title}</p>
                        </div>
                      </div>
                    </li>
          
        ))}
      </ul>
    </div>
  );
};
