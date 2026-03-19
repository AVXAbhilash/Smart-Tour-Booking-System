import React, { useState } from 'react';
import AdminLayout from '../admin/AdminLayout';
import { User, Mail, Shield, Lock, Save, Camera, CheckCircle } from 'lucide-react';

const AdminAccount = () => {
  const [adminData, setAdminData] = useState({
    name: 'Super Admin',
    email: 'admin@briskode.com',
    role: 'Super Administrator',
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleAdminChange = (e) => {
    setAdminData({ ...adminData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswordData({ ...passwordData, [e.target.name]: e.target.value });
  };

  const handleProfileSubmit = (e) => {
    e.preventDefault();
    console.log('Admin profile updated:', adminData);
    alert('Admin profile updated successfully!');
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords don't match!");
      return;
    }
    console.log('Admin password updated');
    alert('Password updated successfully!');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-black text-slate-900 tracking-tight">Account Settings</h1>
        <p className="text-slate-500 font-medium mt-1">Manage your admin profile and security preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Admin Profile Card */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 text-center">
            <div className="relative inline-block mb-4">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=250" 
                alt="Admin Profile" 
                className="w-32 h-32 rounded-2xl object-cover border-4 border-primary-50 shadow-lg mx-auto"
              />
              <button className="absolute -bottom-3 -right-3 bg-primary-600 hover:bg-primary-700 text-white p-2.5 rounded-xl shadow-lg transition-colors border-4 border-white">
                <Camera size={18} />
              </button>
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 mt-4">{adminData.name}</h2>
            <div className="inline-flex items-center gap-1.5 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-bold mt-2">
              <Shield size={14} /> {adminData.role}
            </div>
            <p className="text-slate-500 font-medium mt-4">{adminData.email}</p>
            
            <div className="border-t border-gray-100 pt-6 mt-6 text-left">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">System Permissions</h3>
              <ul className="space-y-2 text-sm font-medium text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Full Dashboard Access</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Manage Tours & Users</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Financial Reports</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Right Column: Forms */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Personal Information Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <div className="bg-primary-50 p-3 rounded-xl">
                <User className="text-primary-600" size={24} />
              </div>
              <h2 className="text-xl font-black text-slate-900">Profile Details</h2>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="name"
                    value={adminData.name}
                    onChange={handleAdminChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 text-slate-900 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="email" 
                      name="email"
                      value={adminData.email}
                      onChange={handleAdminChange}
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 text-slate-900 transition-colors"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end pt-2">
                <button type="submit" className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg shadow-primary-500/30 flex items-center gap-2">
                  <Save size={18} /> Update Profile
                </button>
              </div>
            </form>
          </div>

          {/* Security / Password Form */}
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-200">
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-100">
              <div className="bg-slate-100 p-3 rounded-xl">
                <Lock className="text-slate-600" size={24} />
              </div>
              <h2 className="text-xl font-black text-slate-900">Change Password</h2>
            </div>

            <form onSubmit={handlePasswordSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Current Password</label>
                <div className="relative max-w-md">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Lock size={18} className="text-slate-400" />
                  </div>
                  <input 
                    type="password" 
                    name="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={handlePasswordChange}
                    required
                    placeholder="••••••••"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 text-slate-900 transition-colors"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="password" 
                      name="newPassword"
                      value={passwordData.newPassword}
                      onChange={handlePasswordChange}
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 text-slate-900 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Confirm New Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock size={18} className="text-slate-400" />
                    </div>
                    <input 
                      type="password" 
                      name="confirmPassword"
                      value={passwordData.confirmPassword}
                      onChange={handlePasswordChange}
                      required
                      placeholder="••••••••"
                      className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 text-slate-900 transition-colors"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end pt-2">
                <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-lg">
                  Update Security
                </button>
              </div>
            </form>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminAccount;