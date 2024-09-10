import React, { useState } from 'react';
import { FaUser, FaEnvelope } from 'react-icons/fa';

const Settings: React.FC = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');

  const handleUpdate = () => {
    // Handle user details update
    alert('Details updated!');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-200 to-gray-300 p-4">
      <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 flex items-center">
          <svg className="w-8 h-8 text-blue-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
          Update Your Details
        </h2>
        <div className="space-y-6">
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaUser className="text-gray-500 mr-3" />
            <input
              type="text"
              className="border-none w-full focus:outline-none"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex items-center border border-gray-300 rounded-lg p-3">
            <FaEnvelope className="text-gray-500 mr-3" />
            <input
              type="email"
              className="border-none w-full focus:outline-none"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200 w-full md:w-auto"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;

