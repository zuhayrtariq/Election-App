import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Stats } from "react-daisyui";
import { DataContext } from "../DataContext";

const VotingPercentage = () => {
  const totalVotes = 123;
  const {totalVotesData} = useContext(DataContext); //Votes Casted
  return (
    <>
      <div className="stats shadow  ">
        <div className="stat bg-primary text-white py-1 px-4">
          <div className="stat-title font-bold text-xl 2xl:text-2xl text-white">
           Turnover %
          </div>
          <div className="stat-value text-center text-2xl 2xl:text-4xl text-white">
          {((totalVotesData / totalVotes) * 100).toFixed(2)
          }
          </div>
        </div>
        <div className="stat bg-primary text-primary-content py-1 px-4">
          <div className="stat-title text-xl 2xl:text-2xl font-bold text-primary-content">
            Remaining %
          </div>
          <div className="stat-value text-center text-2xl 2xl:text-4xl">
          {((( totalVotes - totalVotesData)/totalVotes) * 100).toFixed(2)
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default VotingPercentage;
