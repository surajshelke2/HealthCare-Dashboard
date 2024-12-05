import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart.js modules
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// Define types for vital data
interface Vital {
  icon: string;
  label: string;
  value: string;
  status: string;
}

const DiagnosisHistory: React.FC = () => {
  // Dynamic data for chart and vitals
  const bloodPressureData = {
    labels: ['Oct 2023', 'Nov 2023', 'Dec 2023', 'Jan 2024', 'Feb 2024', 'Mar 2024'],
    datasets: [
      {
        label: 'Systolic',
        data: [130, 140, 135, 145, 150, 160],
        borderColor: '#ff6384',
        backgroundColor: '#ff6384',
        tension: 0.4,
      },
      {
        label: 'Diastolic',
        data: [80, 85, 78, 76, 82, 78],
        borderColor: '#36a2eb',
        backgroundColor: '#36a2eb',
        tension: 0.4,
      },
    ],
  };

  const vitals: Vital[] = [
    { icon: '🌬️', label: 'Respiratory Rate', value: '20 bpm', status: 'Normal' },
    { icon: '🌡️', label: 'Temperature', value: '98.6°F', status: 'Normal' },
    { icon: '❤️', label: 'Heart Rate', value: '78 bpm', status: 'Lower than Average' },
  ];

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-bold mb-4">Diagnosis History</h2>
      {/* Chart Section */}
      <div className="flex flex-col space-y-4">
        <div className="p-4 bg-purple-50 rounded-lg shadow-md">
          <h3 className="text-sm font-semibold mb-2">Blood Pressure</h3>
          <div className="relative h-48">
            <Line data={bloodPressureData} options={options} />
          </div>
        </div>

        {/* Vital Cards */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          {vitals.map((vital, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-md ${
                vital.status === 'Normal' ? 'bg-blue-100' : 'bg-red-100'
              }`}
            >
              <div className="text-4xl mb-2">{vital.icon}</div>
              <h4 className="text-sm font-semibold">{vital.label}</h4>
              <p className="text-lg font-bold">{vital.value}</p>
              <p
                className={`text-sm ${
                  vital.status === 'Normal' ? 'text-green-600' : 'text-red-600'
                }`}
              >
                {vital.status}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosisHistory;
