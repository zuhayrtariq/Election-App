
import { createContext, useState } from 'react';
export const DataContext = createContext();
export const DataProvider = ({ children }) => {
    const [totalVotesData,setTotalVotesData] = useState({
        voteCasted : 0
    });
    const [votesSummaryData,setVotesSummaryData] = useState();
  
 
  const valueToShare = {
totalVotesData,setTotalVotesData,
votesSummaryData,setVotesSummaryData
  };
  return (
    <DataContext.Provider value={valueToShare}>{children}</DataContext.Provider>
  );
};