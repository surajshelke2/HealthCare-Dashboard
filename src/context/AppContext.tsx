import React, { createContext, useContext, useState } from 'react';

// Define the shape of the context data
interface Patient {
  name: string;
  picture: string;
  gender: string;
  age: number;
}

interface AppContextType {
  data: Patient[];
  setData: React.Dispatch<React.SetStateAction<Patient[]>>;
  saveData: (newPatient: Patient) => void;
}

// Create the context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<Patient[]>([
    {
      name: 'Emily Williams',
      picture: 'https://via.placeholder.com/150', // Replace with actual image URL
      gender: 'Female',
      age: 18,
    },
  ]);

  // Function to save new patient data
  const saveData = (newPatient: Patient) => {
    setData((prevData) => [...prevData, newPatient]);
  };

  return (
    <AppContext.Provider value={{ data, setData, saveData }}>
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
