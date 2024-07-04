import axios from "axios";
import React, { useEffect, useState } from "react";
import { Stats } from "react-daisyui";

const TotalVotes = () => {
  const [value, setValue] = useState(0);
  const [voteCasted, setVoteCasted] = useState(0);

  const [loadedData, setLoadedData] = useState(false);
  const getTotalVoteCasted = async () => {
    const { data } = await axios.get("/vote-casted");
    // console.log(data);
    setVoteCasted(data.votesCasted);
  };
  useEffect(() => {
    (async () => {
      await getTotalVoteCasted();
      setLoadedData(true);
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        await getTotalVoteCasted();
        // setLoadedData(true);
      })();
      setValue((v) => (v <= 0 ? 40 : v - 1));
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  const totalVotes = 127;
  return (
    <>
      <div className="stats shadow  ">
        <div className="stat bg-primary text-white py-1 px-4">
          <div className="stat-title font-bold text-white">
            Total Votes 
          </div>
          <div className="stat-value text-center text-white">{voteCasted}</div>
        </div>
        <div className="stat bg-primary text-primary-content py-1 px-4">
          <div className="stat-title font-bold text-primary-content">
            Remaining Votes
          </div>
          <div className="stat-value text-center">
            {totalVotes - voteCasted}
          </div>
        </div>
      </div>
    </>
  );
};

export default TotalVotes;
