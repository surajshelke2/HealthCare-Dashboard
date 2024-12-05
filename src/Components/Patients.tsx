import React, { useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import ProfileCard from './ProfileCard';

const Patients = ({ data }: { data: any[] }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <div className="flex flex-col space-y-2 mt-2 items-center">
        <h3 className="font-bold">Patients</h3>
        <div className="flex flex-row space-x-2 items-center">
          {visible && <input type="text" className="rounded-sm p-1" placeholder="Search patients" />}
          <BiSearch onClick={() => setVisible(!visible)} className="cursor-pointer" />
        </div>
      </div>

      <div className="mt-4">
        {data.map((patient, index) => (
          <ProfileCard
            key={index} // Ensure each element has a unique key
            name={patient.name}
            profile={patient.picture}
            gender={patient.gender}
            age={patient.age}
          />
        ))}
      </div>
    </div>
  );
};

export default Patients;
