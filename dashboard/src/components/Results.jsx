import React, { useEffect, useState } from 'react'
import ComparisonBarChart from '../charts/ComaprisonBarChart'
import axios from 'axios'

const Results = () => {
  const [positionId, setPositionId] = useState(1);
  const [value, setValue] = useState(0);
  const [loadedData, setLoadedData] = useState(false);
  const POSITIONS = ['President', 'Vice President','General Secretary', 'Treasurer','Executive Members']
  const [dataset,setDataset] = useState([])
  // useEffect(() => {
  //   (async () => {
  //     await getData();

  //     setLoadedData(true);
  //   })();
  // }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        await getData();
        setPositionId((v) => (v >= 5  ? 1 : v + 1));
        // setLoadedData(true);
      })();
      console.log("Position ID : ",positionId)
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [positionId]);
  const getData = async() =>{
    const {data} = await axios.get(`votes-data?positionId=${positionId}`);
    console.log(data);
    const temp = data.map(x=>{
      return {
        name : x.name,
        votes : x.totalVotes
      }
    })
    setDataset([...temp])
  }
  return (
    <div className='w-full h-[80vh]'>
        <ComparisonBarChart dataset={dataset} label={POSITIONS[positionId-2]}/>
    </div>
  )
}

export default Results