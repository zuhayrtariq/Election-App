import React, { useState } from "react";
import Candidate from "../components/Candidate";
import LeadingCrown from "../components/LeadingCrown";
import CandidateWithPic from "../components/CandidateWithPic";
import { FaEquals } from "react-icons/fa";

const ContestDiv = ({ heading = "President", data }) => {
  const vote1 = data[0].totalVotes;
  const vote2 = data[1] ? data[1].totalVotes : data[0].totalVotes - 1;
  return (
    <div className="w-full xl:py-2  shadow-xl bg-secondary/10  xl:px-4  rounded-lg h-full">
      <div className="flex  items-center justify-center w-full text-primary-content  2xl:text-2xl 2xl:pt-2 uppercase">
        {heading}
      </div>
      <div className={`w-full relative  ${heading == 'Treasurer' ? ' w-full flex items-center justify-center' : ' grid gap-x-2 grid-cols-2'}    `}>
        {vote1 == vote2 && <div className="absolute  flex items-center justify-center  left-0 right-0 ">TIE</div>}
      <div  className="relative flex items-center flex-col">
      <div
                className={`${
                  (vote1 > vote2) ? "  opacity-100 " : "  opacity-0"
                }  animate-bounce`}>
                <LeadingCrown/> 
              </div>
              <div className="w-full ">

              <CandidateWithPic
                imgUrl={data[0].imgUrl}
                name={data[0].name}
                designation={data[0].designation}
                votes={data[0].totalVotes}
                winner={(vote1 > vote2)}
                />
                </div>
            </div>
            {data[1] &&   <div  className="relative flex items-center flex-col">
              <div
                className={`${
                  (vote1 < vote2) ? "  opacity-100 " : "  opacity-0"
                }  animate-bounce`}>
                <LeadingCrown/> 
              </div>
              <div className="w-full ">

              <CandidateWithPic
                imgUrl={data[1].imgUrl}
                name={data[1].name}
                designation={data[1].designation}
                votes={data[1].totalVotes}
                winner={vote1 < vote2}
                />
                </div>
            </div>}
          
         
      </div>
    </div>
  );
};

export default ContestDiv;
