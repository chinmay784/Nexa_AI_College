import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { BackgroundGradientAnimation } from "../background-gradient-animation";
import { LampContainer } from "../Ace_Ui/LampDemo";

// Replace with your actual API key
const genAI = new GoogleGenerativeAI("AIzaSyBlyrCTuq5O4W7EDTmE-oHdfMLgliTnOd4");

const SpeakAi = (text) => {
  if (!text) return;
  window.speechSynthesis.cancel(); // Stop any previous speech
  const speakInput = new SpeechSynthesisUtterance(text);
  speakInput.lang = "en-US";
  speakInput.onend = () => console.log("Speech synthesis finished.");
  window.speechSynthesis.speak(speakInput);
};

const StopInput = () => {
  window.speechSynthesis.cancel();
  console.log("Speech synthesis stopped.");
};

const Voice = () => {
  const [transcript, setTranscript] = useState("");
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState("");

  const VoiceInput = () => {
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Your browser does not support Speech Recognition");
      return;
    }

    let recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onstart = () => console.log("Voice recognition started...");
    recognition.onresult = (event) => {
      let spokenText = event.results[0][0].transcript.toLowerCase();
      console.log(`You said: ${spokenText}`);
      setTranscript(spokenText);
      getResponseForGivenPrompt(spokenText);
    };

    recognition.onerror = (event) => console.error("Speech recognition error:", event.error);
    recognition.onend = () => console.log("Voice recognition ended");

    recognition.start();
  };

  const getResponseForGivenPrompt = async (prompt) => {
    try {
      setLoading(true);
      console.log("Fetching AI response for:", prompt);

      const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
      const result = await model.generateContent(prompt);

      console.log("API Raw Response:", result);

      const responseText = result.response.text(); // Correct way to extract text response

      if (!responseText) {
        throw new Error("Empty response from API");
      }

      setRes(responseText);
      console.log("AI Response Text:", responseText);
      SpeakAi(responseText);
    } catch (error) {
      console.error("Something went wrong:", error);
      SpeakAi("Sorry, I couldn't process your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <LampContainer />
    
    <div className="relative min-h-screen flex items-center justify-center -mt-[600px]   px-4 py-12">
      
  
      <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl p-8 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Nexa AI Assistant
        </h1>
        <p className="text-white/80 mb-6 text-base sm:text-lg">
          Tap the button and speak a command. Nexa will respond instantly.
        </p>
  
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-6">
          <button
            onClick={VoiceInput}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-base shadow-lg hover:scale-105 transition-transform"
          >
            Start Listening
          </button>
          <button
            onClick={StopInput}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-red-500 to-pink-600 text-white font-semibold text-base shadow-lg hover:scale-105 transition-transform"
          >
            Stop Listening
          </button>
        </div>
  
        <div className="text-gray-200 text-sm sm:text-base italic mb-2 min-h-[24px]">{transcript}</div>
        {loading && <p className="text-blue-300 font-medium text-sm sm:text-base">Processing...</p>}
  
        <div className="mt-8 p-4 bg-white rounded-xl text-gray-800 shadow-md max-w-xl mx-auto w-full">
          <p className="text-base sm:text-lg font-medium">{res}</p>
        </div>
      </div>
    </div>
    </>
  );
  
};

export default Voice;
