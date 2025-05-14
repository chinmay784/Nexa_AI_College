"use client";

import React, { useEffect, useRef, useState } from "react";

export const Sliders = ({
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
    <div className="scroller relative max-w-7xl overflow-hidden">
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-4 py-4 w-max flex-nowrap animate-scroll-right ${speedClass} ${
          pauseOnHover ? "hover:[animation-play-state:paused]" : ""
        }`}
      >
        {duplicatedItems.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full rounded-2xl border border-slate-700 px-8 py-6 md:w-[450px] bg-slate-900 text-gray-100"
          >
            <blockquote>
              <span className="text-sm">{item.quote}</span>
              <div className="mt-6">
                <span className="text-gray-400 text-sm">{item.name}</span>
                <br />
                <span className="text-gray-400 text-sm">{item.title}</span>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
