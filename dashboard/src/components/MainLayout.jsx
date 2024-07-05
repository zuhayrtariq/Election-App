import React, { useEffect, useState } from "react";
import VicePresidentDiv from "../CandidateDivs/VicePresidentDiv";
import PresidentDiv from "../CandidateDivs/PresidentDiv";
import GeneralDiv from "../CandidateDivs/GeneralDiv";
import ExecutivePieChart from "../charts/ExecutivePieChart";
import axios from "axios";
import ContestDiv from "../CandidateDivs/ContestDiv";
import ExecutiveDiv from "../CandidateDivs/ExecutiveDiv";

const MainLayout = () => {
  const [value, setValue] = useState(0);
  const [votesData, setVotesData] = useState([]);

  const [loadedData, setLoadedData] = useState(false);
  const [presidentData, setPresidentData] = useState([]);
  const [VicePresidentData, setVicePresidentData] = useState([]);
  const [generalSecretaryData, setGeneralSecretaryData] = useState([]);
  const [treasurerData, setTreasurerData] = useState([]);
  const [executiveData, setExecutiveData] = useState([]);

  const getTotalVotesData = async () => {
    const { data } = await axios.get("/votes-data");
    
    let tempData = data.filter((x) => x.position == "President");
    setPresidentData([...tempData]);
    tempData = data.filter((x) => x.position == "Vice President");
    setVicePresidentData([...tempData]);

    tempData = data.filter((x) => x.position == "General Secretary");
    setGeneralSecretaryData([...tempData]);

    tempData = data.filter((x) => x.position == "Treasurer");
    setTreasurerData([...tempData]);

    tempData = data.filter((x) => x.position == "Executive Member");
    setExecutiveData([...tempData]);
    setVotesData(data);
  };
  useEffect(() => {
    (async () => {
      await getTotalVotesData();
      setLoadedData(true);
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        await getTotalVotesData();
        // setLoadedData(true);
      })();
      setValue((v) => (v <= 0 ? 40 : v - 1));
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  if (!loadedData) {
    return <>Loading</>;
  }

  return (
    <div className="grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-1 grid-flow-col w-full h-full">
      <div className="w-full h-full flex items-center justify-center  rounded-lg overflow-hidden">
        <ContestDiv data={presidentData}/>
      </div>
      <div className="rounded-lg w-full h-full flex items-center justify-center ">
      <ContestDiv data={generalSecretaryData} heading="General Secretary"/>
      </div>
      <div className="rounded-lg w-full h-full flex items-center justify-center  ">
        <ContestDiv data={treasurerData} heading="Treasurer"/>
      </div>

      <div className=" row-span-3  ">
        <div className="rounded-lg grid gap-y-1 gap-x-4  grid-flow-col w-full h-full grid-rows-3">
        <div className="rounded-lg w-full h-full flex items-center justify-center  overflow-hidden ">
        <ContestDiv data={VicePresidentData} heading="Vice President"/>
      </div>
          <div className="row-span-2 ">
            <div className="rounded-lg w-full h-full flex items-center justify-center  overflow-hidden">
            <ExecutiveDiv data={executiveData} heading="Executive Members"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
