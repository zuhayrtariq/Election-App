import React, { useState } from "react";
import Candidate from "../components/Candidate";
import LeadingCrown from "../components/LeadingCrown";
import CandidateWithPic from "../components/CandidateWithPic";

const ExecutiveDiv = ({ heading = "Executive Members", data }) => {
   
    const sortedData = data.sort((a,b) => b.totalVotes - a.totalVotes).slice(0,5);
    let winnerVotesArray = sortedData.map(x=>x.totalVotes);
    
  return (
    <div className="w-full h-full  shadow-inner  px-4  rounded-lg">
      <div className="flex  items-center justify-center w-full text-primary-content text-2xl pt-2 uppercase">
        {heading}
      </div>
      <div className={`w-full  grid grid-cols-4 gap-4 place-content-center    `}>
        {data.map((x, i) => {
          return (
            <div key={i} className={`${i>=8 && 'col-span-2 item '}relative flex items-center flex-col`}>
              <div
                className={`${
                  winnerVotesArray.includes(x.totalVotes) ? "opacity-100 " : "opacity-0"
                } animate-bounce`}>
                <LeadingCrown />
              </div>
              <Candidate
                imgUrl={x.imgUrl}
                name={x.name}
                designation={x.designation}
                votes={x.totalVotes}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExecutiveDiv;
