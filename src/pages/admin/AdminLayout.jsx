import React, { useState, useEffect } from 'react';
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
  Globe,
  Sun,
  Moon
} from 'lucide-react';

const AdminLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // --- Dark Mode Logic ---
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || false;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  // -----------------------

  const isActive = (path) => location.pathname === path;

  const handleLogout = (e) => {
    e.preventDefault();
    console.log("Admin logged out");
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
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex transition-colors duration-300">
      
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
        
        {/* Sidebar Header with Dark Mode Toggle */}
        <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800 bg-slate-950/50">
          <Link to="/admin/dashboard" className="flex items-center gap-2 group">
            <Globe className="text-primary-500" size={24} />
            <span className="font-black text-xl tracking-tight text-white">
              Booking<span className="text-primary-500">Buddy</span>
            </span>
          </Link>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={toggleDarkMode}
              className="text-slate-400 hover:text-white transition-colors p-1.5 hidden lg:block"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} />}
            </button>
            <button 
              className="lg:hidden text-slate-400 hover:text-white p-1.5"
              onClick={() => setIsSidebarOpen(true)}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
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

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-900">
          <Link 
            to="/admin/account" 
            className="block bg-slate-800 rounded-2xl p-4 mb-3 border border-slate-700 hover:border-primary-500/50 hover:shadow-primary-500/10 shadow-lg relative overflow-hidden group transition-all"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-500/10 blur-2xl rounded-full transition-all group-hover:bg-primary-500/20"></div>
            <div className="flex items-center gap-4 relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150" 
                alt="Admin Profile" 
                className="w-14 h-14 rounded-xl object-cover border-2 border-primary-500 shadow-md transition-transform group-hover:scale-105"
              />
              <div className="flex-1 min-w-0">
                <p className="text-base font-black text-white truncate group-hover:text-primary-50 transition-colors">Super Admin</p>
                <p className="text-xs font-bold text-primary-400 truncate mb-1.5">@bookingbuddy_admin</p>
                <div className="flex items-center gap-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider group-hover:text-slate-300 transition-colors">Online</span>
                </div>
              </div>
            </div>
          </Link>

          <button 
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl font-bold text-red-400 bg-red-500/10 border border-transparent hover:border-red-500/20 hover:bg-red-500/20 hover:text-red-300 transition-all shadow-sm"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        
        {/* Mobile Header */}
        <header className="h-16 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between px-4 lg:hidden sticky top-0 z-10 transition-colors">
          <div className="flex items-center">
            <button 
              onClick={() => setIsSidebarOpen(false)}
              className="p-2 text-slate-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            >
              <Menu size={24} />
            </button>
            <span className="ml-4 font-black text-lg text-slate-900 dark:text-white">Admin Portal</span>
          </div>
          
          {/* Mobile Dark Mode Toggle */}
          <button 
            onClick={toggleDarkMode}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 transition-colors"
          >
            {isDarkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} />}
          </button>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 bg-gray-50/50 dark:bg-slate-950/50 transition-colors">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
        
      </div>
    </div>
  );
};

export default AdminLayout;