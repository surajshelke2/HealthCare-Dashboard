import React from 'react';
import { Line } from 'react-chartjs-2';
import { useAppContext } from '@/context/AppContext';
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

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DiagnosisHistory = () => {
  //@ts-ignore
  const { selectedPatient } = useAppContext();

  if (!selectedPatient || !selectedPatient.diagnosis_history.length) {
    return <div>No data available for the selected patient.</div>;
  }

  const labels = selectedPatient.diagnosis_history.map(
    (item: { month: any; year: any; }) => `${item.month} ${item.year}`
  );
  const systolicData = selectedPatient.diagnosis_history.map(
    (item: { blood_pressure: { systolic: { value: any; }; }; }) => item.blood_pressure.systolic.value
  );
  const diastolicData = selectedPatient.diagnosis_history.map(
    (item: { blood_pressure: { diastolic: { value: any; }; }; }) => item.blood_pressure.diastolic.value
  );

  const bloodPressureData = {
    labels,
    datasets: [
      {
        label: 'Systolic',
        data: systolicData,
        borderColor: '#ff6384',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#ff6384',
        pointRadius: 6,
      },
      {
        label: 'Diastolic',
        data: diastolicData,
        borderColor: '#36a2eb',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        tension: 0.4,
        pointBackgroundColor: '#36a2eb',
        pointRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: true },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  const latestData =
    selectedPatient.diagnosis_history[
      selectedPatient.diagnosis_history.length - 1
    ];
  const { blood_pressure, heart_rate, respiratory_rate, temperature } = latestData;

  const vitals = [
    { icon: '🌬️', label: 'Respiratory Rate', value: `${respiratory_rate.value} breaths/min`, status: respiratory_rate.levels },
    { icon: '🌡️', label: 'Temperature', value: `${temperature.value}°F`, status: temperature.levels },
    { icon: '❤️', label: 'Heart Rate', value: `${heart_rate.value} bpm`, status: heart_rate.levels },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Diagnosis History</h2>

      <div className="flex items-start bg-purple-50 rounded-lg shadow-md p-4">
      
        <div className="flex-1 h-64 p-4">
          <Line data={bloodPressureData} options={options} />
        </div>

      
        <div className="flex flex-col ml-6 p-4 space-y-4">
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold">Systolic</h4>
            <p className="text-lg font-bold">{blood_pressure.systolic.value}</p>
            <p className="text-sm text-gray-600">{blood_pressure.systolic.levels}</p>
          </div>
          <div className="flex flex-col items-start">
            <h4 className="text-sm font-semibold">Diastolic</h4>
            <p className="text-lg font-bold">{blood_pressure.diastolic.value}</p>
            <p className="text-sm text-gray-600">{blood_pressure.diastolic.levels}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6 bg-purple-50 p-4 rounded-lg shadow-md">
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
  );
};

export default DiagnosisHistory;
