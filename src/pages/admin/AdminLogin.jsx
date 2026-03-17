import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, ShieldCheck, Globe } from 'lucide-react';

const AdminLogin = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Admin Login attempt:', formData);
    // Mock successful login routing to the dashboard
    navigate('/admin/dashboard');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 relative overflow-hidden p-4">
      {/* Dark Abstract Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070" 
          alt="Secure Admin Background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
      </div>

      {/* Admin Login Glass Card */}
      <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-slate-700/50 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative z-10">
        
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center bg-primary-600/20 p-4 rounded-full border border-primary-500/30 mb-6 shadow-[0_0_30px_rgba(37,99,235,0.2)]">
            <ShieldCheck size={40} className="text-primary-500" />
          </div>
          
          <h2 className="text-3xl font-black text-white mb-2 tracking-tight">Admin Portal</h2>
          <p className="text-slate-400 font-medium text-sm">
            Restricted access. Please log in with your administrative credentials.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Admin Email</label>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Mail size={18} className="text-slate-500 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input 
                type="email" 
                name="email"
                required
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all font-medium"
                placeholder="admin@briskode.com"
              />
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider">Password</label>
            </div>
            <div className="relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Lock size={18} className="text-slate-500 group-focus-within:text-primary-500 transition-colors" />
              </div>
              <input 
                type="password" 
                name="password"
                required
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-3.5 bg-slate-950/50 border border-slate-800 rounded-xl text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all font-medium"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-primary-600/20 flex items-center justify-center gap-2 mt-8"
          >
            Authenticate <ArrowRight size={18} />
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-800 flex justify-center">
          <div className="flex items-center gap-2 opacity-50">
            <Globe className="text-white" size={16} />
            <span className="font-bold text-sm tracking-tight text-white">
              Briskode<span className="text-primary-500">Tours</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;