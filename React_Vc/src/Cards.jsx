
import React from 'react';


function Cards() {
  return (
    <div className="bg-black text-white min-h-screen p-5">
      <div className="text-6xl text-blue-300 mb-10">What we do</div>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="bg-gray-900 rounded-lg p-5 w-full md:w-1/2 mb-5 md:mb-0 shadow-lg">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/30x30"
              alt="User avatar"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="bg-gray-800 p-3 rounded-lg flex-grow">
              <div>You 8:15 AM</div>
              <div>Schedule a Google meeting with John for 3:45PM tomorrow!</div>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/30x30"
              alt="AI Assistant avatar"
              className="w-8 h-8 rounded-full mr-3"
            />
            <div className="bg-gray-800 p-3 rounded-lg flex-grow">
              <div>AI Assistant 8:15 AM</div>
              <div>I've successfully scheduled a Google meeting with John for 3:45PM tomorrow.</div>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Message AI Assistant..."
              className="flex-grow p-3 rounded-lg bg-gray-800 text-white border-none"
            />
            <button className="bg-blue-600 p-3 rounded-lg ml-3">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
        <div className="bg-gray-900 rounded-lg p-5 w-full md:w-1/2 shadow-lg">
          <div className="bg-gray-800 p-10 rounded-lg flex items-center justify-center mb-4">
            Generating image...
          </div>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Generate an image of..."
              className="flex-grow p-3 rounded-lg bg-gray-800 text-white border-none"
            />
            <button className="bg-blue-600 p-3 rounded-lg ml-3">Generate</button>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <div className="text-3xl mb-2">Chatbot Development</div>
        <div className="text-lg">
          We develop intelligent chatbots that leverage advanced NLP to elevate customer interactions and streamline your business processes.
        </div>
      </div>
      <div className="mt-10">
        <div className="text-3xl mb-2">Content Creation</div>
        <div className="text-lg">
          Our content creation solutions effortlessly generate high-quality content according to your brand's guidelines to captivate your audience.
        </div>
      </div>
    </div>
  );
}

export default Cards;
