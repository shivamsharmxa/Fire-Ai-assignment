import React from 'react';
import Sidebar from '../components/common/Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-grow bg-gray-100 p-6 overflow-auto">
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
