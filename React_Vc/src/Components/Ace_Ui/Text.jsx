"use client";
import React from "react";
import { TextGenerateEffect } from "./TextGenerateEffect";

const words = ` AI Assistant: 

8:15 AM 

I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.
`;

export function Text() {
  return <TextGenerateEffect words={words} />;
}
