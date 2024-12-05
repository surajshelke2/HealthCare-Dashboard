import { useAppContext } from '@/context/AppContext';
import React from 'react';
import { FaDownload } from 'react-icons/fa';

const LabResults: React.FC = () => {
 
  // @ts-ignore
  const {selectedPatient} = useAppContext();
  if (!selectedPatient || !selectedPatient.lab_results.length) {
    return <div>No data available for the selected patient.</div>;
  }
  const results = selectedPatient.lab_results; 

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full  max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-4">Lab Results</h2>
      <ul className="divide-y divide-gray-200">
        {results.map((result: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; link: string | undefined; }, index: React.Key | null | undefined) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 px-4 hover:bg-gray-100 rounded-lg cursor-pointer transition"
          >
          
            <span className="text-gray-700">{result}</span>
         
              <FaDownload />
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
