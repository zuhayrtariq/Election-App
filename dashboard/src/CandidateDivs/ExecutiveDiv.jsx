import React, { useState } from "react";
import Candidate from "../components/Candidate";
import LeadingCrown from "../components/LeadingCrown";
import CandidateWithPic from "../components/CandidateWithPic";

const ExecutiveDiv = ({ heading = "Executive Members", data }) => {
   
    const sortedData = data.sort((a,b) => b.totalVotes - a.totalVotes).slice(0,5);
    let winnerVotesArray = sortedData.map(x=>x.totalVotes);
    const temp = data.filter(x=>winnerVotesArray.includes(x.totalVotes));
   let tieFlag = false;
    if(temp.length > 5)
    {
      tieFlag = true
    }
    
  return (
    <div className="w-full h-full  shadow-inner  px-4  rounded-lg flex flex-col items-center justify-center">
      <div className="flex  items-center justify-center w-full text-primary-content text-2xl pt-2 uppercase">
        {heading}
      </div>
      <div className={`w-full  grid grid-cols-5 gap-4 place-content-center    `}>
        {data.map((x, i) => {
          return (
            <div key={i} className={`relative flex items-center flex-col `}>
              <div
                className={`${
                  winnerVotesArray.includes(x.totalVotes) ? "opacity-100 " : "opacity-0"
                } `}>
                
                {
                  x.totalVotes == winnerVotesArray[4] && tieFlag ? <span>TIE</span> : <LeadingCrown />
                }


              </div>
              <CandidateWithPic
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
