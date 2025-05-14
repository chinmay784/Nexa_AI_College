import React from "react";
import { HoverEffect } from "./HoverEffect";


export function Hover() {
  return (
    (<div className="max-w-5xl mx-auto px-8 ">
      <HoverEffect items={projects} />
    </div>)
  );
}
export const projects = [
  
 
  {
    title: "Project Completed",
    description1: "93+",
    description:
      "We Completed 93+ Projects Using Nexa Ai.",
    
  },
  {
    title: "Project Completed",
    description1: "93+",
    description:
      "We Completed 93+ Projects Using Nexa Ai.",
    
  },
  {
    title: "Satisfied Costumers",
    description1: "100%",
    description:"Our Solutions Satisfied Our Work.",
    
  },
  {
    title: "Cost Saved Per Month",
    description1: "80k",
    description:
      "Our Solutions Saved Our Costumer Cost An Average $80000 Per Month.",
    
  },
];
