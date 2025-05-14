import React from "react";
import "./Price.css";

function PriceCard() {
  return (
    <div id="Prices">
     <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent text-start ml-10 mt-[100px] bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var">
     Subscriptions
        </h1>
    <div className="flex flex-wrap justify-around mt-20  ">
      <div className="card">
        <span className="title">
          Basic
          <p className="pricing">
            $99 <span className="pricing-time">/ month</span>
          </p> 
          <span className="sub-title">
            For businesses looking to start with AI and automations.
            <ul className="list">
              <li className="list-item">
                <span className="check">✓</span>1 developer
              </li>
              <li className="list-item">
               <span className="check">✓</span>  Basic chatbots & LLMs
              </li>
              <li className="list-item">
               
                <span className="check">✓</span>  5 monthly workflow automations
              </li>
              <li className="list-item">
              
                <span className="check">✓</span>   50 monhtly content creation requests
              </li>
              <li className="list-item">
               
                <span className="check">✓</span>  Cancel & pause anytime
              </li>
            </ul>
            <button className="button">
              <span className="text-button">Get pro now</span>
            </button>
          </span>
        </span>
      </div>


      <div className="card">
        <span className="title">
          Popular
          <p className="pricing">
            $199 <span className="pricing-time">/ month</span>
          </p>
          <span className="sub-title">
            For businesses looking to start with AI and automations.
            <ul className="list">
              <li className="list-item">
                <span className="check">✓</span>10 developer
              </li>
              <li className="list-item">
               <span className="check">✓</span>  Basic chatbots & LLMs
              </li>
              <li className="list-item">
               
                <span className="check">✓</span>  15 monthly workflow automations
              </li>
              <li className="list-item">
              
                <span className="check">✓</span>   150 monhtly content creation requests
              </li>
              <li className="list-item">
               
                <span className="check">✓</span>  Cancel & pause anytime
              </li>
            </ul>
            <button className="button">
              <span className="text-button">Get Popular now</span>
            </button>
          </span>
        </span>
      </div>

      <div className="card">
        <span className="title">
          Gold
          <p className="pricing">
            $599 <span className="pricing-time">/ month</span>
          </p>
          <span className="sub-title">
            For businesses looking to start with AI and automations.
            <ul className="list">
              <li className="list-item">
                <span className="check">✓</span>All Time Support
              </li>
              <li className="list-item">
               <span className="check">✓</span>  Basic chatbots & LLMs
              </li>
              <li className="list-item">
               
                <span className="check">✓</span>  monthly workflow automations
              </li>
              <li className="list-item">
              
                <span className="check">✓</span>  monhtly content creation requests
              </li>
              <li className="list-item">
               
                <span className="check">✓</span>  Cancel & pause anytime
              </li>
            </ul>
            <button className="button">
              <span className="text-button">Get Gold now</span>
            </button>
          </span>
        </span>
      </div>
    </div>
    </div>
  );
}

export default PriceCard;
