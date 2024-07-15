import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../DataContext";
const TotalVotes = () => {
 const {totalVotesData} = useContext(DataContext);
  const totalVotes = 123;
  return (
    <>
      <div className="stats shadow  ">
        <div className="stat bg-primary text-white py-1 px-4 cursor-pointer" onClick={()=>document.getElementById('votes_modal').showModal()}>
          <div className="stat-title font-bold text-white text-xl 2xl:text-2xl">
            Turnover
          </div>
          <div className="stat-value text-center  text-2xl 2xl:text-4xl text-white">{totalVotesData}</div>
        </div>
        <div className="stat bg-primary text-primary-content py-1 px-4 cursor-pointer" onClick={()=>document.getElementById('remaining_votes_modal').showModal()}>
          <div className="stat-title font-bold text-primary-content text-xl 2xl:text-2xl">
            Remaining
          </div>
          <div className="stat-value text-center  text-2xl 2xl:text-4xl">
            {totalVotes - totalVotesData}
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalVotes;
