import { cn } from "../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";

export const HoverEffect = ({
  items,
  className
}) => {
  let [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    (<div
      className={cn("grid grid-cols-1 lg:gap-[170px] lg:-ml-36  md:grid-cols-2  lg:grid-cols-4   ", className)}>
      {items.map((item, idx) => (
        <Link
          href={item?.link}
          key={item?.link}
          className="relative group  block p-2 h-[400px] w-[300px]"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-[400px] w-[300px] bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }} />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle className='text-2xl md:text-4xl bg-clip-text text-transparent text-start  bg-gradient-to-b from-gray-900 to-gray-700 dark:from-white dark:to-cyan-100 lg:text-[20px] font-bold inter-var'>{item.title}</CardTitle>
            <CardDescription1 className='text-2xl md:text-4xl bg-clip-text text-transparent text-start  bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var'>{item.description1}</CardDescription1>
            <CardDescription className=' mt-32 text-amber-50'>{item.description}</CardDescription>
           
          </Card>
        </Link>
      ))}
    </div>)
  );
};

export const Card = ({
  className,
  children
}) => {
  return (
    (<div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}>
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>)
  );
};
export const CardTitle = ({
  className,
  children
}) => {
  return (
    (<h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>)
  );
};
export const CardDescription = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};
export const CardDescription1 = ({
  className,
  children
}) => {
  return (
    (<p
      className={cn("mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm", className)}>
      {children}
    </p>)
  );
};
