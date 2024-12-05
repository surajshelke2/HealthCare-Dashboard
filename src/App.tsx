import { useEffect, useState } from 'react';
import './App.css';
import AppBar from './Components/AppBar';
import DiagnosisHistory from './Components/DiagnosisHistory';
import DiagnosticList from './Components/DiagnosticList';
import LabResults from './Components/LabResult';
import Patients from './Components/Patients';

import axios from 'axios';
import { useAppContext } from './context/AppContext';
import ProfileSection from './Components/ProfileSection';

function App() {
  const [data, setData] = useState([]);
  //@ts-ignore
  const { setSelectedPatient } = useAppContext();

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const username = 'coalition';
        const password = 'skills-test';

        const response = await axios.get(
          'https://fedskillstest.coalitiontechnologies.workers.dev',
          {
            headers: {
              Authorization: `Basic ${btoa(`${username}:${password}`)}`,
            },
          }
        );

        console.log('Patients Data:', response.data);
      
          setSelectedPatient(response.data[0]); 
        
        setData(response.data);
      } catch (error: any) {
        console.error('Error fetching patients:', error.response?.data || error.message);
      }
    };

    fetchPatients();
  }, []);

  return (
    <>
      <AppBar />
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 h-auto w-[96%] bg-slate-300 mx-auto py-4 px-2">
      
        <div className="lg:w-1/4">
          <Patients data={data} />
        </div>

      
        <div className="lg:w-2/4 flex flex-col space-y-4">
          <DiagnosisHistory/>
          <DiagnosticList />
        </div>

   
        <div className="lg:w-1/3 flex flex-col space-y-4">
          <ProfileSection/>
          <LabResults />
        </div>
      </div>
    </>
  );
}

export default App;
