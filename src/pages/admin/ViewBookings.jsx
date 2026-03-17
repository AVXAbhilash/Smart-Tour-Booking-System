import React from 'react';
import { Search, CheckCircle, XCircle, Eye, Trash2, Calendar, MapPin } from 'lucide-react';
import AdminLayout from './AdminLayout';

// Mock Data
const mockBookings = [
  { 
    id: 'BRK-8921', 
    user: { name: 'Rahul Sharma', email: 'rahul.s@example.com' }, 
    tour: 'Bali Tropical Escapade', 
    date: 'Oct 15, 2026', 
    guests: 2, 
    amount: 2400, 
    status: 'Confirmed' 
  },
  { 
    id: 'BRK-4432', 
    user: { name: 'Priya Patel', email: 'priya.p@example.com' }, 
    tour: 'Swiss Alps Adventure', 
    date: 'Nov 02, 2026', 
    guests: 4, 
    amount: 9600, 
    status: 'Pending' 
  },
  { 
    id: 'BRK-1109', 
    user: { name: 'Amit Kumar', email: 'amit.k@example.com' }, 
    tour: 'Kyoto Heritage Tour', 
    date: 'Dec 10, 2026', 
    guests: 1, 
    amount: 1800, 
    status: 'Cancelled' 
  },
];

const ViewBookings = () => {
  return (
    <AdminLayout>
      <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Manage Bookings</h1>
          <p className="text-gray-500 mt-1 font-medium">Review, confirm, or cancel customer tour reservations.</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-bold transition-all shadow-md flex items-center gap-2">
          Export Bookings
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-center bg-gray-50/50 gap-4">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search by Booking ID, User, or Tour..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <select className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium text-slate-700 w-full sm:w-auto">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Confirmed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-bold">Booking Info</th>
                <th className="px-6 py-4 font-bold">Customer</th>
                <th className="px-6 py-4 font-bold">Trip Details</th>
                <th className="px-6 py-4 font-bold">Amount</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="font-bold text-primary-600">{booking.id}</div>
                    <div className="text-slate-900 font-bold mt-1">{booking.tour}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-900">{booking.user.name}</div>
                    <div className="text-gray-500 text-xs mt-0.5">{booking.user.email}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-600 mb-1">
                      <Calendar size={14} className="text-primary-500" /> {booking.date}
                    </div>
                    <div className="flex items-center gap-1 text-gray-600">
                      <MapPin size={14} className="text-primary-500" /> {booking.guests} Guest(s)
                    </div>
                  </td>
                  <td className="px-6 py-4 font-bold text-slate-900">
                    ${booking.amount}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      booking.status === 'Confirmed' ? 'bg-green-100 text-green-700' : 
                      booking.status === 'Pending' ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    <div className="flex justify-end gap-2">
                      <button className="text-slate-600 hover:text-slate-900 transition-colors bg-slate-100 p-2 rounded-lg" title="View Details">
                        <Eye size={16} />
                      </button>
                      
                      {booking.status === 'Pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-800 transition-colors bg-green-50 p-2 rounded-lg" title="Confirm Booking">
                            <CheckCircle size={16} />
                          </button>
                          <button className="text-orange-600 hover:text-orange-800 transition-colors bg-orange-50 p-2 rounded-lg" title="Cancel Booking">
                            <XCircle size={16} />
                          </button>
                        </>
                      )}
                      
                      <button className="text-red-600 hover:text-red-800 transition-colors bg-red-50 p-2 rounded-lg" title="Delete Record">
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

export default ViewBookings;