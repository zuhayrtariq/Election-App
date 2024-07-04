import React from "react";
import Candidate from "../components/Candidate";
import LeadingCrown from "../components/LeadingCrown";

const GeneralDiv = ({ heading = "General Secretary" }) => {
  return (
    <div className="w-full h-full  shadow-inner  px-4  rounded-lg">
      <div className="flex items-center justify-center w-full text-primary-content text-3xl pt-4 uppercase">
        {heading}
      </div>
      <div className="w-full  grid grid-cols-2 gap-x-2">
        <div className="relative flex flex-col w-full justify-center items-center text-primary-content font-bold font-primeFont">
          <div className="">
            <LeadingCrown />
          </div>
          <Candidate
            name="Furqan Ullah"
            designation="C&P Team Leader"
            votes="100"
          />
        </div>
        <div className="relative flex flex-col w-full justify-center items-center text-primary-content font-bold font-primeFont">
          <div className="opacity-0">
            <LeadingCrown />
          </div>
          <Candidate
            name="Wasiq Farooq"
            designation="C&P Team Leader"
            votes="27"
            winner={false}
          />
        </div>
      </div>
    </div>
  );
};

export default GeneralDiv;
