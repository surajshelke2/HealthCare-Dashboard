import React, { createContext, useContext, useEffect, useState } from 'react';



// @ts-ignore 
const AppContext = createContext();

//@ts-ignore
export const AppProvider = ({ children }) => {
  // @ts-ignore
  const [selectedPatient, setSelectedPatient] = useState(null);
  
  return (
    // @ts-ignore 
    <AppContext.Provider value={{ selectedPatient, setSelectedPatient }}>
      {children}
    </AppContext.Provider>
  );
  };



export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
