import { createContext, useState } from 'react';
export const PageContext = createContext();
export const PageProvider = ({ children }) => {
  const [page,setPage] = useState(0)
 
  const valueToShare = {
  page,
  setPage
  };
  return (
    <PageContext.Provider value={valueToShare}>{children}</PageContext.Provider>
  );
};