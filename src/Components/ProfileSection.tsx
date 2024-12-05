import React from 'react';
import { FaBirthdayCake, FaUser, FaPhone, FaShieldAlt } from 'react-icons/fa';

const ProfileSection: React.FC = () => {
  const profileData = {
    name: 'Jessica Taylor',
    dateOfBirth: 'August 23, 1996',
    gender: 'Female',
    contactInfo: '(415) 555-1234',
    emergencyContact: '(415) 555-5678',
    insuranceProvider: 'Sunrise Health Assurance',
    profilePicture: 'https://via.placeholder.com/150', // Replace with the actual image URL
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto">

      <div className="flex flex-col items-center">
        <img
          src={profileData.profilePicture}
          alt={`${profileData.name}'s Profile`}
          className="w-24 h-24 rounded-full object-cover mb-4"
        />
        <h2 className="text-lg font-bold">{profileData.name}</h2>
      </div>

    
      <div className="mt-4 space-y-4 text-sm">
        <div className="flex items-center">
          <FaBirthdayCake className="text-gray-500 mr-3" />
          <span>
            <strong>Date Of Birth:</strong> {profileData.dateOfBirth}
          </span>
        </div>
        <div className="flex items-center">
          <FaUser className="text-gray-500 mr-3" />
          <span>
            <strong>Gender:</strong> {profileData.gender}
          </span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-500 mr-3" />
          <span>
            <strong>Contact Info:</strong> {profileData.contactInfo}
          </span>
        </div>
        <div className="flex items-center">
          <FaPhone className="text-gray-500 mr-3" />
          <span>
            <strong>Emergency Contacts:</strong> {profileData.emergencyContact}
          </span>
        </div>
        <div className="flex items-center">
          <FaShieldAlt className="text-gray-500 mr-3" />
          <span>
            <strong>Insurance Provider:</strong> {profileData.insuranceProvider}
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
