import React, { useEffect, useState } from 'react'
import ComparisonBarChart from '../charts/ComaprisonBarChart'
import axios from 'axios'

const POSITIONS = ['President', 'Vice President','General Secretary','Treasurer','Executive Member']
const Results = ({data}) => {
  const [positionId, setPositionId] = useState(0);
  const [value, setValue] = useState(0);
  const [loadedData, setLoadedData] = useState(false);
  const [positionLabel,setPositionLabel] = useState('');
  const [dataset,setDataset] = useState(data)
  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        await getData(1);
      })();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [positionId]);
  useEffect(() => {
      (async () => {
        await getData();
      })();
   
  }, []);
  const getData = async(flag) =>{
    if(flag)
      setPositionId((v) => (v > 3  ? 0 :  v == 2 ? 4 : v + 1));

    const tdata = data.filter(x => x.position == POSITIONS[positionId])

    setPositionLabel(POSITIONS[positionId])
    const temp = tdata.map(x=>{
      return {
        name : x.name,
        votes : x.totalVotes
      }
    })
    setDataset([...temp])
  }
  return (
    <div className='w-full h-full'>
        <ComparisonBarChart dataset={dataset} label={positionLabel}/>
    </div>
  )
}

export default Results