import React from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';
import AdminLayout from './AdminLayout';

const mockTours = [
  { id: 'TR-101', title: 'Bali Tropical Escapade', location: 'Indonesia', price: 1200, status: 'Active' },
  { id: 'TR-102', title: 'Swiss Alps Adventure', location: 'Switzerland', price: 2400, status: 'Active' },
  { id: 'TR-103', title: 'Kyoto Heritage Tour', location: 'Japan', price: 1800, status: 'Draft' },
];

const ManageTours = () => {
  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Manage Tours</h1>
          <p className="text-gray-500 mt-1 font-medium">Add, edit, or remove tour packages.</p>
        </div>
        <button className="bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-lg shadow-primary-500/30 flex items-center gap-2">
          <Plus size={18} /> Add New Tour
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
              placeholder="Search tours..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-bold">Tour Info</th>
                <th className="px-6 py-4 font-bold">Location</th>
                <th className="px-6 py-4 font-bold">Price</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {mockTours.map((tour) => (
                <tr key={tour.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{tour.title}</div>
                    <div className="text-gray-500 text-xs mt-0.5">ID: {tour.id}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-600 font-medium">{tour.location}</td>
                  <td className="px-6 py-4 font-bold text-slate-900">${tour.price}</td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      tour.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {tour.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    <div className="flex justify-end gap-3">
                      <button className="text-primary-600 hover:text-primary-800 transition-colors bg-primary-50 p-2 rounded-lg"><Edit size={16} /></button>
                      <button className="text-red-600 hover:text-red-800 transition-colors bg-red-50 p-2 rounded-lg"><Trash2 size={16} /></button>
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

export default ManageTours;