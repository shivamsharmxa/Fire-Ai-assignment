import React from 'react';

interface User {
  name: string;
  email: string;
  status: string;
}

const UserTable: React.FC = () => {
  const users: User[] = [
    { name: 'John Doe', email: 'john@example.com', status: 'Active' },
    { name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
    { name: 'Michael Brown', email: 'michael@example.com', status: 'Pending' },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">User List</h2>
      <table className="min-w-full text-left">
        <thead>
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Email</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="border-t">
              <td className="p-2">{user.name}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;