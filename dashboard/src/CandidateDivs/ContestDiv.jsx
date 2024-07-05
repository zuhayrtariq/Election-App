import React, { useState } from "react";
import Candidate from "../components/Candidate";
import LeadingCrown from "../components/LeadingCrown";
import CandidateWithPic from "../components/CandidateWithPic";

const ContestDiv = ({ heading = "President", data }) => {
  console.log(data)
  const vote1 = data[0].totalVotes;
  const vote2 = data[1] ? data[1].totalVotes : data[0].totalVotes+1;
  const maxVotes = Math.max(...data.map((o) => o.totalVotes));
  return (
    <div className="w-full h-full  shadow-inner  px-4  rounded-lg">
      <div className="flex  items-center justify-center w-full text-primary-content text-2xl pt-2 uppercase">
        {heading}
      </div>
      <div className={`w-full   ${heading == 'Treasurer' ? ' w-full flex items-center justify-center' : ' grid gap-x-2 grid-cols-2'}    `}>
        {data.map((x, i) => {
          return (
            <div key={i} className="relative flex items-center flex-col">
              <div
                className={`${
                  (maxVotes == x.totalVotes)  ? "opacity-100 " : "opacity-0"
                } animate-bounce`}>
               {vote1 == vote2 ? "TIE" : <LeadingCrown />} 
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

export default ContestDiv;
