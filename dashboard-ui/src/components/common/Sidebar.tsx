import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaChartBar, FaCog, FaUserCircle, FaSignOutAlt, FaBars } from 'react-icons/fa';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Add/remove overflow hidden class to the body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <div className="relative">
      {/* Mobile Toggle Button */}
      <button
        className="absolute top-4 left-4 md:hidden text-white text-2xl z-50"
        onClick={toggleSidebar}
      >
        <FaBars />
      </button>
      
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-full w-64 bg-gradient-to-r from-gray-800 to-gray-900 text-white flex flex-col p-6 shadow-xl transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:relative md:translate-x-0`}>
        {/* Logo Section */}
        <div className="flex items-center mb-8">
          <img 
            src="/assets/CompanyLogo.png" 
            alt="Company Logo" 
            className="w-12 h-12 rounded-full border-2 border-gray-600" 
          /> 
          <span className="text-2xl font-bold ml-4">FireAi</span>
        </div>
        
        {/* Profile Section */}
        <div className="flex items-center mb-6">
          <FaUserCircle className="text-3xl mr-3" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Shivam Sharma</span>
            <span className="text-sm text-gray-400">Frontend Developer</span>
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-col space-y-4">
          <Link 
            to="/" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-300 group"
          >
            <FaHome className="text-xl mr-4 group-hover:text-gray-300" />
            <span className="text-lg group-hover:text-gray-300">Home</span>
          </Link>
          <Link 
            to="/analytics" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-300 group"
          >
            <FaChartBar className="text-xl mr-4 group-hover:text-gray-300" />
            <span className="text-lg group-hover:text-gray-300">Analytics</span>
          </Link>
          <Link 
            to="/settings" 
            className="flex items-center p-3 rounded-lg hover:bg-gray-700 transition duration-300 group"
          >
            <FaCog className="text-xl mr-4 group-hover:text-gray-300" />
            <span className="text-lg group-hover:text-gray-300">Settings</span>
          </Link>
        </nav>

        {/* Footer or Additional Section */}
        <div className="mt-auto flex flex-col items-center border-t border-gray-700 pt-4">
          <Link 
            to="/logout" 
            className="flex items-center p-2 rounded-lg hover:bg-gray-700 transition duration-300 group"
          >
            <FaSignOutAlt className="text-xl mr-4 text-red-500 group-hover:text-red-300" />
            <span className="text-lg text-red-500 group-hover:text-red-300">Logout</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
