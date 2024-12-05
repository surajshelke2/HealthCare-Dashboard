import { useAppContext } from '@/context/AppContext';
import React, { ReactNode } from 'react';


const DiagnosticList: React.FC = () => {
  // @ts-ignore
  const {selectedPatient} = useAppContext();

  
  if (!selectedPatient || !selectedPatient.diagnostic_list.length) {
    return <div>No data available for the selected patient.</div>;
  }

  const diagnosisData = selectedPatient.diagnostic_list
  

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Diagnostic List</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="px-4 py-2 border border-gray-200">Problem/Diagnosis</th>
              <th className="px-4 py-2 border border-gray-200">Description</th>
              <th className="px-4 py-2 border border-gray-200">Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnosisData.map((diagnosis: {
              [x: string]: ReactNode; problem: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; status: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; 
}, index: React.Key | null | undefined) => (
              <tr
                key={index}
                className={`${
                  //@ts-ignore
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-200 transition-colors`}
              >
              
                <td className="px-4 py-2 border border-gray-200">{diagnosis.name}</td>
                <td className="px-4 py-2 border border-gray-200">{diagnosis.description}</td>
                <td
                  className={`px-4 py-2 border border-gray-200 font-medium ${
                    diagnosis.status === 'Cured'
                      ? 'text-green-600'
                      : diagnosis.status === 'Under observation'
                      ? 'text-yellow-600'
                      : 'text-gray-600'
                  }`}
                >
                  {diagnosis.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiagnosticList;
