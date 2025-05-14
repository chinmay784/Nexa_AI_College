"use client";
import React from "react";
import { SparklesCore } from "./SparklesCore";

export function SparklesPreview() {
  return (
    (<div
      className=" ">
      <h1
        className=" mt-2  text-3xl lg:text-4xl font-bold text-centertext-2xl md:text-4xl bg-clip-text text-transparent text-center bg-gradient-to-b from-cyan-900 to-neutral-700 dark:from-cyan-600 dark:to-white  inter-var   relative z-20">
        AI Assistant
      </h1>
      <div className="  h-18 relative">
        {/* Gradients */}
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div
          className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div
          className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        {/* Core component */}
        <SparklesCore 
          background="transparent"
          minSize={0.4}
          speed={1}
          maxSize={1}
          particleDensity={500}
          className="w-full h-22  "
          particleColor="#FFF" />

        {/* Radial Gradient to prevent sharp edges */}
        <div
          className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>)
  );
}
