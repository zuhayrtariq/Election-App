import { createContext, useState } from 'react';
export const VoteContext = createContext();
export const VoteProvider = ({ children }) => {
  const [votes,setVotes] = useState({  '1' : '',
    '2' : '',
    '3' : '',
    '4' : '',
    '5' : []
})
 
  const valueToShare = {
  votes,
  setVotes
  };
  return (
    <VoteContext.Provider value={valueToShare}>{children}</VoteContext.Provider>
  );
};