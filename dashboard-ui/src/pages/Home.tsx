import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="p-4 md:p-6 lg:p-8 bg-gray-100 min-h-screen flex flex-col">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-8 flex-shrink-0">
        <h1 className="text-2xl md:text-4xl font-bold">Welcome to the Dashboard</h1>
        <p className="mt-2 text-base md:text-lg">Monitor your performance, manage operations, and keep track of key metrics here.</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 flex-grow">
        <MetricCard title="Total Sales" value="$12,345" />
        <MetricCard title="Users" value="1,234" />
        <MetricCard title="New Orders" value="567" />
      </div>

      {/* Recent Activities Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg mb-8 flex-shrink-0">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <ActivityCard title="New User Registration" description="A new user has registered with your platform." time="2 hours ago" />
          <ActivityCard title="Order Placed" description="Order #1234 has been placed." time="1 day ago" />
          <ActivityCard title="System Update" description="System update completed successfully." time="3 days ago" />
        </div>
      </div>

      {/* Quick Actions Section */}
      <div className="bg-white p-4 rounded-lg shadow-lg flex-shrink-0">
        <h2 className="text-lg md:text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <ActionCard title="Create Report" description="Generate a new performance report." />
          <ActionCard title="Manage Users" description="View and manage user accounts." />
          <ActionCard title="Update Settings" description="Adjust system settings and preferences." />
        </div>
      </div>
    </div>
  );
};

// Reusable Component for Metric Cards
const MetricCard: React.FC<{ title: string; value: string }> = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col items-start justify-center transition-transform transform hover:scale-105">
    <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    <p className="text-2xl font-bold mt-2 text-gray-900">{value}</p>
  </div>
);

// Reusable Component for Activity Cards
const ActivityCard: React.FC<{ title: string; description: string; time: string }> = ({ title, description, time }) => (
  <div className="p-4 border rounded-lg shadow-sm hover:bg-gray-100 transition duration-300">
    <h3 className="text-md font-semibold text-gray-900">{title}</h3>
    <p className="text-sm mt-1 text-gray-700">{description}</p>
    <p className="text-xs text-gray-500 mt-2">{time}</p>
  </div>
);

// Reusable Component for Quick Action Cards
const ActionCard: React.FC<{ title: string; description: string }> = ({ title, description }) => (
  <div className="bg-blue-100 p-4 rounded-lg shadow-sm hover:bg-blue-200 transition duration-300 cursor-pointer flex flex-col items-start">
    <h3 className="text-md font-semibold text-blue-600">{title}</h3>
    <p className="text-sm mt-1 text-gray-700">{description}</p>
  </div>
);

export default Home;
