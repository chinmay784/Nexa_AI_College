import React from "react";
import "./Alt1.css";
import { InfiniteMovingCards } from "./InfiniteMovingCards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-black p-8">
      <InfiniteMovingCards items={testimonials}  speed="normal" />
    </div>
  );
}

const testimonials = [
  {
    quote: "Nexa's AI solutions",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
    rating: 5,
  },
  {
    quote: "Good And Problem Solve.",
    name: "William Shakespeare",
    title: "Hamlet",
    rating: 4,
  },
  {
    quote: "Nice ! Nexa Doing Great",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
    rating: 5,
  },
  {
    quote: "Powerful Ai Assistant",
    name: "Jane Austen",
    title: "Pride and Prejudice",
    rating: 4,
  },
  {
    quote: "This Ai Is Here",
    name: "Herman Melville",
    title: "Moby-Dick",
    rating: 5,
  },
];