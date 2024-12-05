import React from 'react';
import { FaDownload } from 'react-icons/fa';

const LabResults: React.FC = () => {
  const results = [
    { name: 'Blood Tests', link: '#' },
    { name: 'CT Scans', link: '#' },
    { name: 'Radiology Reports', link: '#' },
    { name: 'X-Rays', link: '#' },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full  max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-4">Lab Results</h2>
      <ul className="divide-y divide-gray-200">
        {results.map((result, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 px-4 hover:bg-gray-100 rounded-lg cursor-pointer transition"
          >
            <span className="text-gray-700">{result.name}</span>
            <a
              href={result.link}
              download
              className="text-gray-500 hover:text-teal-500 transition"
            >
              <FaDownload />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabResults;
