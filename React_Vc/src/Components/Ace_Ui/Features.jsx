


import React, { useContext } from "react";
import { PlaceholdersAndVanishInputDemo } from "./PlaceholdersAndVanishInputDemo";
import { Text } from "./Text";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { SparklesPreview } from "./SparklesPreview";
import { useNavigate } from "react-router-dom";
import { UserAppContext } from "../../context/UserAppContext";


function Features() {

  let navigate = useNavigate();
  const {user} = useContext(UserAppContext)

  

  return (
    <div className="mt-32 px-4 md:px-10 lg:px-20 w-full" id="features">
      <h1 className="text-2xl md:text-2xl bg-clip-text text-transparent text-start  bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var">
        What We Do
      </h1>
      <div className="flex flex-col lg:flex-row gap-6 justify-center items-center mt-12 w-full">
        <div className="lg:w-[600px] w-full max-w-md p-6 border-2 rounded-xl border-gray-800 shadow-lg bg-black">
          <div className="mt-4 p-6 border rounded-md border-gray-800">
            <Text />
            <PlaceholdersAndVanishInputDemo />
          </div>
          <div className="mt-4 p-4 border rounded-md border-gray-800">
            <p className="text-gray-500 text-md text-start">AI Assistant Ask Me Anything? Chatbot Development</p>
          </div>
        </div>

        <div className="lg:w-[400px] w-full max-w-md p-6 border-2 rounded-xl border-gray-800 shadow-lg bg-black flex flex-col items-center">
          <SparklesPreview />
          <div className="mt-4 p-4 border rounded-md border-gray-800 w-full">
            <p className="text-gray-500 text-md text-start">AI Assistant Ask Me Anything? Chatbot Development</p>
            <div className="mt-4">
              <PlaceholdersAndVanishInputDemo />
            </div>
          </div>
          <div className="w-full flex justify-center mt-4">
           
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-8 w-full">
{
  user && <button className="bg-gray-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition w-full max-w-xs md:max-w-sm" onClick={()=> navigate("/search-ai")} >
  Lets Chat With AI
</button>
}
{
  user && <button className="bg-gray-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-gray-700 transition w-full max-w-xs md:max-w-sm" onClick={() => navigate("/listen-ai")}>
  Lets Talk To Nexa
</button>
}
</div>
    </div>
  );
}

export default Features;







