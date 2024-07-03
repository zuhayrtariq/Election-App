import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({});
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const storedUserDetails = sessionStorage.getItem("UserDetails");
    setUserDetails(storedUserDetails);
    setLoading(false); 
  }, []);

  return (
    <AuthContext.Provider value={{ userDetails, setUserDetails, loading }}>
      {children}
    </AuthContext.Provider>
  );
};