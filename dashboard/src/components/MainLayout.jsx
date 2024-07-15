import React, { useContext, useEffect, useState } from "react";
import VicePresidentDiv from "../CandidateDivs/VicePresidentDiv";
import PresidentDiv from "../CandidateDivs/PresidentDiv";
import GeneralDiv from "../CandidateDivs/GeneralDiv";
import ExecutivePieChart from "../charts/ExecutivePieChart";
import axios from "axios";
import ContestDiv from "../CandidateDivs/ContestDiv";
import ExecutiveDiv from "../CandidateDivs/ExecutiveDiv";

import Results from "./Results";
import WinnersDiv from "./WinnersDiv";
import { DataContext } from "../DataContext";

const MainLayout = () => {
  const {votesSummaryData} = useContext(DataContext);

  const presidentData = votesSummaryData.filter((x) => x.position == "President");

  const vicePresidentData = votesSummaryData.filter((x) => x.position == "Vice President");
  const generalSecretaryData = votesSummaryData.filter((x) => x.position == "General Secretary");
  
  const executiveData = votesSummaryData.filter((x) => x.position == "Executive Member");
 
  const treasurerData = votesSummaryData.filter((x) => x.position == "Treasurer");
 
 
  



  return (
    <div className="grid grid-cols-3 grid-rows-4 pt-4 gap-4  h-full ">
      
      
      <div className="rounded-lg flex items-center overflow-y-auto  ">
      <ContestDiv data={presidentData} heading="President"/>
      </div>
      <div className="rounded-lg flex items-center overflow-y-auto  ">
      <ContestDiv data={vicePresidentData} heading="Vice President"/>
      </div>
      <div className="rounded-lg flex items-center overflow-y-auto  ">
      <ContestDiv data={generalSecretaryData} heading="General Secretary"/>
      </div>
      <div className="col-span-2 row-span-2   flex items-center justify-center">

    <ExecutiveDiv data={executiveData}/>
</div>
    
      {/* <div className="rounded-lg flex items-center overflow-y-auto  ">
      <ContestDiv data={treasurerData} heading="Treasurer"/>
      </div> */}
     
      <div className="col-span-1 row-span-3">
      <Results data={votesSummaryData}/>
    </div>
    <div className="rounded-lg flex items-center overflow-y-auto col-span-2  ">
        

      <ContestDiv data={treasurerData} heading="Treasurer"/>
       
      </div>
    

    </div>
  );
};

export default MainLayout;
