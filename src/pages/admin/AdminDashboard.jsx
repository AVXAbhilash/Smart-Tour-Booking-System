import React from 'react';
import { TrendingUp, Users, Map, CalendarCheck, ArrowUpRight } from 'lucide-react';
import AdminLayout from './AdminLayout';

const StatCard = ({ title, value, icon: Icon, trend }) => (
  <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start justify-between transition-all hover:shadow-md">
    <div>
      <p className="text-sm font-bold text-gray-500 mb-1 uppercase tracking-wider">{title}</p>
      <h3 className="text-3xl font-extrabold text-slate-900">{value}</h3>
      <p className="text-sm text-green-500 mt-2 font-bold flex items-center gap-1">
        <TrendingUp size={16} /> {trend} this month
      </p>
    </div>
    <div className="p-4 bg-primary-50 rounded-2xl text-primary-600">
      <Icon size={24} />
    </div>
  </div>
);

const AdminDashboard = () => {
  return (
    <AdminLayout>
      <div className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Overview</h1>
          <p className="text-gray-500 mt-1 font-medium">Monitor your business metrics and recent activity.</p>
        </div>
        <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-xl font-medium transition-colors flex items-center gap-2">
          Download Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Revenue" value="$45,231" icon={TrendingUp} trend="+18%" />
        <StatCard title="New Bookings" value="124" icon={CalendarCheck} trend="+12%" />
        <StatCard title="Active Tours" value="42" icon={Map} trend="+4%" />
        <StatCard title="Total Users" value="8,549" icon={Users} trend="+22%" />
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900">Recent Bookings</h2>
          <button className="text-sm text-primary-600 font-bold hover:text-primary-700 flex items-center gap-1">
            View All <ArrowUpRight size={16} />
          </button>
        </div>
        <div className="p-6">
           <div className="text-center py-10 text-gray-400 border-2 border-dashed border-gray-100 rounded-xl font-medium">
             Booking table will be rendered here from the API.
           </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminDashboard;