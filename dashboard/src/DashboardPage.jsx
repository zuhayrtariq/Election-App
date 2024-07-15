import React, { useContext, useEffect, useState } from 'react'
import Header from './components/Header'
import Results from './components/Results'
import PresidentChart from './charts/PresidentChart'
import MainLayout from './components/MainLayout'
import Ticker from './components/Ticker'
import { DataContext } from './DataContext'
import axios from 'axios'

const DashboardPage = () => {
  const {
    totalVotesData,
    setTotalVotesData,
    votesSummaryData,
    setVotesSummaryData,
  } = useContext(DataContext);
  const [value, setValue] = useState(0);
  const [votersData, setVotersData] = useState([]);
  const [remainingVotersData, setRemainingVotersData] = useState([]);
  const [loadedData, setLoadedData] = useState(false);
  const getTotalVoteCasted = async () => {
    const { data } = await axios.get("/total-votes");

    setTotalVotesData(data.votesCasted);
  };
  const getVotesData = async () => {
    const { data } = await axios.get(`votes-data`);
    setVotesSummaryData(data)
  }
  const getVotersData = async () => {
    const { data } = await axios.get('candidates-vote-casted');
    setVotersData(data)
  }
  const getRemainingVotersData = async () => {
    const { data } = await axios.get('candidates-vote-remaining');
    setRemainingVotersData(data)
  }

  useEffect(() => {
    (async () => {
      await getTotalVoteCasted();
      await getVotesData();
      await getVotersData();
      await getRemainingVotersData();
      setLoadedData(true);
    })();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      (async () => {
        await getTotalVoteCasted();
        await getVotesData();
        await getVotersData();
        await getRemainingVotersData();
      })();
      setValue((v) => (v <= 0 ? 40 : v - 1));
    }, 30000);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);
  return (

    <>
      {
        loadedData ?
          <div className=" h-screen w-full  px-2 bg-[url('bg.jpg')] z-10 bg-center bg-cover">
            <Header />
            <div className='w-full h-[calc(100vh-160px)] overflow-hidden '>
            <dialog id="votes_modal" className="modal ">
                <div className="modal-box w-11/12 max-w-5xl">
                  <div className="overflow-x-auto">
                    <table className="table  table-zebra">
                      {/* head */}
                      <thead>
                        <tr>
                          <th className='text-xl font-bold'>#</th>
                          <th className='text-xl font-bold'>Employee Id</th>
                          <th className='text-xl font-bold'>Name</th>
                          <th className='text-xl font-bold'>Designation</th>
                          <th className='text-xl font-bold'>Voted at</th>
                        </tr>
                      </thead>
                      <tbody>
                      {votersData.map((x,i) =>{
                          return(
                            <tr key={i}>
                              <th>{i+1}</th>
                            <th>{x.voterId}</th>
                            <td>{x.name}</td>
                            <td>{x.designation}</td>
                            <td>{x.addedOn}</td>
                            
                          </tr>
                          )
                        })}
                        
                      </tbody>
                    </table>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <dialog id="remaining_votes_modal" className="modal ">
                <div className="modal-box w-11/12 max-w-5xl">
                  <div className="overflow-x-auto">
                    <table className="table  table-zebra">
                      {/* head */}
                      <thead>
                        <tr>
                          <th className='text-xl font-bold'>#</th>
                          <th className='text-xl font-bold'>Employee Id</th>
                          <th className='text-xl font-bold'>Name</th>
                          <th className='text-xl font-bold'>Designation</th>
                          {/* <th className='text-xl font-bold'>Voted at</th> */}
                        </tr>
                      </thead>
                      <tbody>
                      {remainingVotersData.map((x,i) =>{
                          return(
                            <tr key={i}>
                              <th>{i+1}</th>
                            <th>{x.id}</th>
                            <td>{x.name}</td>
                            <td>{x.designation}</td>
                            {/* <td>{x.addedOn}</td> */}
                            
                          </tr>
                          )
                        })}
                        
                      </tbody>
                    </table>
                  </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button>close</button>
                </form>
              </dialog>
              <MainLayout />
            </div>
          </div> :
          <>Loading</>
      }

    </>
  )
}

export default DashboardPage