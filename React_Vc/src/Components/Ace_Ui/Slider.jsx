import React from "react";
import './btn.css'
import { Sliders } from "./sliders";

export function Slider() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col items-center justify-center relative overflow-hidden bg-white dark:bg-black">
      <Sliders items={testimonials} speed="normal" />
    </div>
  );
}

const testimonials = [
  { quote: "It was the best of times...", name: "Charles Dickens", title: "A Tale of Two Cities" },
  { quote: "To be, or not to be...", name: "William Shakespeare", title: "Hamlet" },
  { quote: "All that we see or seem...", name: "Edgar Allan Poe", title: "A Dream Within a Dream" },
  { quote: "It is a truth universally...", name: "Jane Austen", title: "Pride and Prejudice" },
  { quote: "Call me Ishmael...", name: "Herman Melville", title: "Moby-Dick" },
];
