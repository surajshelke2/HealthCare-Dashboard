import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import ProfileCard from "./ProfileCard";
import { useAppContext } from "@/context/AppContext";

const Patients = ({ data }: { data: any[] }) => {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
 //@ts-ignore
  const {setSelectedPatient} = useAppContext();
  const filteredData = data.filter((patient) =>
    patient.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      className="border border-gray-300 bg-white rounded-lg shadow-md p-4 h-screen flex flex-col"
      style={{
        width: "100%",
      }}
    >
   
      <div className="flex justify-between items-center mb-4">
        <h3
          className="text-lg font-extrabold"
          style={{
            fontFamily: "Manrope, sans-serif",
            fontWeight: "800",
            color: "#072635",
          }}
        >
          Patients
        </h3>
        <div className="flex items-center space-x-2">
     
          <div
            className={`transition-all duration-300 ${
              visible ? "w-36 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <input
              type="text"
              className="p-1 border rounded-md w-full"
              placeholder="Search patients"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <BiSearch
            onClick={() => setVisible(!visible)}
            className="cursor-pointer text-gray-500"
          />
        </div>
      </div>

      <div
        className="flex-1 overflow-y-auto custom-scrollbar"
        style={{
          maxHeight: "calc(100% - 100px)", 
        }}
      >
        {filteredData.map((patient, index) => (
           <div key={index} onClick={() => setSelectedPatient(patient)}>
           <ProfileCard
             name={patient.name}
             profile={patient.profile_picture}
             gender={patient.gender}
             age={patient.age}
           />
         </div>

 ))}
      </div>
    </div>
  );
};

export default Patients;
