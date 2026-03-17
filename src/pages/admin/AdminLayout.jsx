import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Map, 
  CalendarCheck, 
  Users, 
  Star, 
  LogOut, 
  Menu, 
  X,
  Globe
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate(); // 1. Bring in the navigate hook

  // Helper to check active routes
  const isActive = (path) => location.pathname === path;

  // 2. Create the Logout function
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Admin logged out");
    
    // Clear any auth tokens or local storage here later
    // localStorage.removeItem('adminToken');
    
    // Redirect back to the main login page
    navigate('/'); 
  };

  const navLinks = [
    { name: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Manage Tours', path: '/admin/tours', icon: Map },
    { name: 'View Bookings', path: '/admin/bookings', icon: CalendarCheck },
    { name: 'Manage Users', path: '/admin/users', icon: Users },
    { name: 'Manage Reviews', path: '/admin/reviews', icon: Star },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* Mobile Sidebar Overlay */}
      {!isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-20 lg:hidden backdrop-blur-sm"
          onClick={() => setIsSidebarOpen(true)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed lg:sticky top-0 h-screen w-64 bg-slate-900 text-slate-300 flex flex-col transition-transform duration-300 z-30 ${
        isSidebarOpen ? '-translate-x-full lg:translate-x-0' : 'translate-x-0'
      }`}>
        
        {/* Sidebar Header */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800 bg-slate-950/50">
          <Link to="/admin/dashboard" className="flex items-center gap-2 group">
            <Globe className="text-primary-500" size={24} />
            <span className="font-black text-xl tracking-tight text-white">
              <br />
              Booking<span className="text-primary-500">Buddy</span>
              <br />
              <span className="text-xs text-primary-500">Admin</span>
            </span>
            <br />
          </Link>
          <button 
            className="ml-auto lg:hidden text-slate-400 hover:text-white"
            onClick={() => setIsSidebarOpen(true)}
          >
            <X size={20} />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1 overflow-y-auto">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all duration-200 ${
                  isActive(link.path) 
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-900/20' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <Icon size={18} />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer / Logout */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/30">
          {/* 3. Attach the handleLogout function to this button */}
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl font-bold text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-colors"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Mobile Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 lg:hidden sticky top-0 z-10">
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="p-2 text-slate-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Menu size={24} />
          </button>
          <span className="ml-4 font-black text-lg text-slate-900">Admin Portal</span>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default AdminLayout;