import React from 'react';
import { Search, Edit, Trash2, Shield, User, Ban } from 'lucide-react';
import AdminLayout from './AdminLayout';

// Mock Data
const mockUsers = [
  { id: 'USR-001', name: 'John Doe', email: 'john@example.com', role: 'Customer', status: 'Active', joined: 'Oct 12, 2025' },
  { id: 'USR-002', name: 'Sarah Smith', email: 'sarah.s@example.com', role: 'Admin', status: 'Active', joined: 'Sep 05, 2025' },
  { id: 'USR-003', name: 'Mike Johnson', email: 'mikej@example.com', role: 'Customer', status: 'Suspended', joined: 'Jan 20, 2026' },
];

const ManageUsers = () => {
  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Users</h1>
          <p className="text-gray-500 mt-1 font-medium">View and manage customer accounts and admin access.</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
          Export Data
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search by name or email..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-bold">User</th>
                <th className="px-6 py-4 font-bold">Role</th>
                <th className="px-6 py-4 font-bold">Joined</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {mockUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900">{user.name}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{user.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-slate-700 font-medium">
                      {user.role === 'Admin' ? <Shield size={14} className="text-primary-600"/> : <User size={14} className="text-gray-400"/>}
                      {user.role}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{user.joined}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    <div className="flex justify-end gap-2">
                      <button className="text-primary-600 hover:text-primary-800 transition-colors bg-primary-50 p-2 rounded-lg" title="Edit User">
                        <Edit size={16} />
                      </button>
                      <button className="text-primary-600 hover:text-primary-800 transition-colors bg-primary-50 p-2 rounded-lg" title="Suspend User">
                        <Ban size={16} />
                      </button>
                      <button className="text-red-600 hover:text-red-800 transition-colors bg-red-50 p-2 rounded-lg" title="Delete User">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageUsers;