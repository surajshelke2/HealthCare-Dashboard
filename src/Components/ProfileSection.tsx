import { useAppContext } from "@/context/AppContext";
import { FaBirthdayCake, FaPhone, FaShieldAlt, FaUser } from "react-icons/fa";

const ProfileSection: React.FC = () => {
  // @ts-ignore
  const { selectedPatient } = useAppContext();

  console.log(selectedPatient);

  if (!selectedPatient) {
    return (
      <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-md">
        <p className="text-red-500 font-bold">No patient selected</p>
      </div>
    );
  }

  return (
    <div
      className="p-6 bg-white rounded-lg shadow-lg mx-auto"
      style={{
        width: "400px", // Fixed width
      }}
    >
      <div className="flex flex-col items-center">
        <img
          src={selectedPatient.profile_picture}
          alt={`${selectedPatient.name}'s Profile`}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-lg font-bold">{selectedPatient.name}</h2>
      </div>

      <div className="mt-4 space-y-4 text-sm">
        <div className="flex items-center">
          <FaBirthdayCake className="text-gray-500 mr-3" />
          <span>
            <strong>Date Of Birth:</strong> {selectedPatient.date_of_birth || "N/A"}
          </span>
        </div>
        <div className="flex items-center">
          <FaUser className="text-gray-500 mr-3" />
          <span>
            <strong>Gender:</strong> {selectedPatient.gender || "N/A"}
          </span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-500 mr-3" />
          <span>
            <strong>Contact Info:</strong> {selectedPatient.phone_number || "N/A"}
          </span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-500 mr-3" />
          <span>
            <strong>Emergency Contacts:</strong>{" "}
            {selectedPatient.emergency_contact || "N/A"}
          </span>
        </div>
        <div className="flex items-center">
          <FaShieldAlt className="text-gray-500 mr-3" />
          <span>
            <strong>Insurance Provider:</strong>{" "}
            {selectedPatient.insurance_type || "N/A"}
          </span>
        </div>
      </div>

      <div className="mt-6">
        <button className="w-full px-4 py-2 bg-teal-500 text-white font-bold rounded-lg hover:bg-teal-600 transition">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default ProfileSection;
