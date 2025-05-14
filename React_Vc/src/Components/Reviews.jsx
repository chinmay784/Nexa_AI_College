import React from "react";
import {InfiniteMovingCardsDemo} from '../Components/Ace_Ui/InfiniteMovingCardsDemo'
import {InfiniteMovingCardsDemo1} from '../Components/Ace_Ui/InfiniteMovingCardsDemo1'

function Reviews() {
  return (
    <div className=" mt-24" id="Review">
      <div>
        <h1 className="text-2xl md:text-4xl bg-clip-text text-transparent text-start ml-10 bg-gradient-to-b from-cyan-900 to-cyan-700 dark:from-cyan-800 dark:to-cyan-100 lg:text-[80px] font-bold inter-var">
          Reviews
        </h1>
      </div>

      <div>

        <div>
          <InfiniteMovingCardsDemo/>
        </div>
        <div>
          <InfiniteMovingCardsDemo1/>
        </div>


      </div>
      
    </div>
  );
}

export default Reviews;
