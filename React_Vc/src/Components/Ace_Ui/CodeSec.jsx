import React from "react";
import { Code } from "./Code";

function CodeSec() {
  return (
    <>

      <div className="flex flex-col mt-20">
      
        <div>
          <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent text-start ml-10 bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var">
            Nexa Ai Can Do
          </h1>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap m-10 gap-6">
          <Code />
          <Code />
        </div>
      </div>
    </>
  );
}

export default CodeSec;
