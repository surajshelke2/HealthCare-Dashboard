import React from 'react';

interface Diagnosis {
  problem: string;
  description: string;
  status: string;
}

const DiagnosticList: React.FC = () => {

  const diagnosisData: Diagnosis[] = [
    {
      problem: 'Hypertension',
      description: 'Chronic high blood pressure',
      status: 'Under Observation',
    },
    {
      problem: 'Type 2 Diabetes',
      description: 'Insulin resistance and elevated blood sugar',
      status: 'Cured',
    },
    {
      problem: 'Asthma',
      description: 'Recurrent episodes of bronchial constriction',
      status: 'Inactive',
    },
  ];

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
            {diagnosisData.map((diagnosis, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                } hover:bg-gray-200 transition-colors`}
              >
                <td className="px-4 py-2 border border-gray-200">{diagnosis.problem}</td>
                <td className="px-4 py-2 border border-gray-200">{diagnosis.description}</td>
                <td
                  className={`px-4 py-2 border border-gray-200 font-medium ${
                    diagnosis.status === 'Cured'
                      ? 'text-green-600'
                      : diagnosis.status === 'Under Observation'
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
