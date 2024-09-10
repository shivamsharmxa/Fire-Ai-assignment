import React from 'react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import UserTable from '../components/common/UserTable';

const Analytics: React.FC = () => {
  // Bar chart options
  const barChartOptions: ApexOptions = {
    chart: {
      type: 'bar',
      toolbar: { show: false },  // Disable toolbar for a cleaner look
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
  };

  const barChartData = [
    { name: 'Sales', data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 130, 150, 160] },
  ];

  // Pie chart options
  const pieChartOptions: ApexOptions = {
    labels: ['Electronics', 'Furniture', 'Clothing', 'Food'],
  };

  const pieChartData = [45, 25, 15, 15];

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      <div className="flex-1 flex flex-col lg:flex-row gap-6">
        {/* Bar Chart - Sales */}
        <div className="bg-white p-6 rounded-lg shadow flex-1 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Sales Over the Last 12 Months</h2>
          <div className="flex-1">
            <Chart options={barChartOptions} series={barChartData} type="bar" height="100%" width="100%" />
          </div>
        </div>

        {/* Pie Chart - Product Distribution */}
        <div className="bg-white p-6 rounded-lg shadow flex-1 flex flex-col">
          <h2 className="text-xl font-semibold mb-4">Product Category Distribution</h2>
          <div className="flex-1">
            <Chart options={pieChartOptions} series={pieChartData} type="pie" height="100%" width="100%" />
          </div>
        </div>
      </div>

      {/* User Table */}
      <div className="mt-6 bg-white p-6 rounded-lg shadow flex-1 overflow-x-auto">
        <h2 className="text-xl font-semibold mb-4">User List</h2>
        <UserTable />
      </div>
    </div>
  );
};

export default Analytics;
