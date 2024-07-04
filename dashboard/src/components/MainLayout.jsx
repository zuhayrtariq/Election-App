import React, { useEffect, useState } from 'react'
import VicePresidentDiv from '../CandidateDivs/VicePresidentDiv'
import PresidentDiv from '../CandidateDivs/PresidentDiv'
import GeneralDiv from '../CandidateDivs/GeneralDiv'
import ExecutivePieChart from '../charts/ExecutivePieChart'
import axios from 'axios'
import ContestDiv from '../CandidateDivs/ContestDiv'

const MainLayout = () => {
  const [value, setValue] = useState(0);
  const [votesData, setVotesData] = useState([]);

  const [loadedData, setLoadedData] = useState(false);
  const [presidentData,setPresidentData] = useState([]);
  const [VicePresidentData,setVicePresidentData] = useState([]);
  const [generalSecretaryData,setGeneralSecretaryData] = useState([]);
  
  const getTotalVotesData= async () => {
    const { data } = await axios.get("/votes-data");
    console.log(data);
    
    let tempData = data.filter(x=>x.Description == 'President')
    setPresidentData([...tempData])
    tempData = data.filter(x=>x.Description == 'Vice President')
    setVicePresidentData([...tempData])

    tempData = data.filter(x=>x.Description == 'General Secretary');
    setGeneralSecretaryData([...tempData])
    console.log(tempData)
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

  if(!loadedData)
    {
      return <>Loading</>
    }

  return (
    <div className='grid grid-cols-2 grid-rows-3 gap-x-4 gap-y-1 bg-white grid-flow-col w-full h-full'>

<div className='w-full h-full flex items-center justify-center bg-secondary rounded-lg overflow-hidden'><PresidentDiv data={presidentData}/></div>
<div className='rounded-lg w-full h-full flex items-center justify-center bg-primary'><ContestDiv data={VicePresidentData}/></div>
<div className='rounded-lg w-full h-full flex items-center justify-center bg-secondary '><ContestDiv data={generalSecretaryData}/></div>

<div className='w-full h-full flex items-center justify-center row-span-3 bg-red-100'>
 <div className='grid w-full h-full grid-rows-3'>

<div>World</div>
<div className='row-span-2 '>
  <div className='w-full h-full flex items-center justify-center pr-8 bg-blue-200'>
  <ExecutivePieChart/>
  </div>
  </div>

 </div>

  </div>

    </div>
  )
}

export default MainLayout