import './App.css';
import AppBar from './Components/AppBar';
import DiagnosisHistory from './Components/DiagnosisHistory';
import DiagnosticList from './Components/DiagnosticList';
import LabResults from './Components/LabResult';
import Patients from './Components/Patients';
import ProfileSection from './Components/ProfileSection';

function App() {
  const data = [
    {
      name: 'Emily Williams',
      picture: 'https://via.placeholder.com/150',
      gender: 'Female',
      age: 18,
    },
  ];

  return (
    <>
      <AppBar />
      <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 h-auto w-[96%] bg-slate-300 mx-auto py-4 px-2">
      
        <div className="lg:w-1/4 border border-gray-300 bg-white rounded-lg shadow-md p-4">
          <Patients data={data} />
        </div>

        <div className="lg:w-2/4 flex flex-col space-y-4">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>

      
        <div className="lg:w-1/3 flex flex-col space-y-4">
          <ProfileSection />
          <LabResults />
        </div>
      </div>
    </>
  );
}

export default App;
