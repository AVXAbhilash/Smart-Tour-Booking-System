import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, Search, Moon, Sun, User, LogOut } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // New state for the profile dropdown
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path) => location.pathname === path;

  // Check local storage for saved preference on initial load
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true' || false;
  });

  // Apply the dark class globally whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Add a subtle shadow when scrolling down
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle global search submission
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tours?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
      setIsOpen(false);
    }
  };

  // Handle User Logout
  const handleLogout = (e) => {
    e.preventDefault();
    console.log("User logged out");
    setIsProfileOpen(false);
    setIsOpen(false);
    // Add logic here later to clear user auth tokens
    navigate('/'); 
  };

  return (
    <nav className={`fixed w-full z-50 top-0 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl shadow-sm border-b border-gray-100 dark:border-slate-800 py-2' 
        : 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link to="/home" className="flex items-center gap-2 group flex-shrink-0">
            <div className="bg-primary-600 p-2 rounded-xl group-hover:bg-primary-700 transition-colors shadow-md shadow-primary-200 dark:shadow-primary-900/50">
              <Globe className="text-white" size={24} />
            </div>
            <span className="font-black text-2xl tracking-tight text-slate-900 dark:text-white hidden sm:block">
              Booking<span className="text-primary-600 dark:text-primary-400">Buddy</span>
            </span>
          </Link>

          {/* Global Search Bar (Desktop) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <form onSubmit={handleSearch} className="w-full relative group">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search size={16} className="text-gray-400 dark:text-slate-400 group-focus-within:text-primary-600 dark:group-focus-within:text-primary-400 transition-colors" />
              </div>
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, tours..." 
                className="w-full pl-11 pr-4 py-2.5 bg-gray-100/80 dark:bg-slate-800/80 border border-transparent rounded-full text-sm font-medium focus:outline-none focus:bg-white dark:focus:bg-slate-800 focus:border-primary-200 dark:focus:border-primary-500/30 focus:ring-4 focus:ring-primary-600/10 dark:focus:ring-primary-500/10 transition-all placeholder-gray-400 dark:placeholder-slate-500 text-slate-900 dark:text-white"
              />
            </form>
          </div>

          {/* Desktop Navigation, Dark Mode & Profile */}
          <div className="hidden md:flex items-center space-x-6 flex-shrink-0">
            <Link to="/home" className={`font-bold transition-colors ${isActive('/home') ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'}`}>
              Home
            </Link>

            <Link to="/tours" className={`font-bold transition-colors ${isActive('/tours') ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'}`}>
              Packages
            </Link>
            
            <Link to="/my-bookings" className={`font-bold transition-colors ${isActive('/my-bookings') ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'}`}>
              My Bookings
            </Link>

            <Link to="/faq" className={`font-bold transition-colors ${isActive('/faq') ? 'text-primary-600 dark:text-primary-400' : 'text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400'}`}>
              FAQ
            </Link>
            
            <div className="w-px h-6 bg-gray-200 dark:bg-slate-700"></div> {/* Divider */}

            {/* Dark Mode Toggle Button */}
            <button 
              onClick={toggleDarkMode}
              className="p-2.5 bg-gray-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-700 rounded-full transition-all"
              title="Toggle Dark Mode"
            >
              {isDarkMode ? <Sun size={20} className="text-primary-400" /> : <Moon size={20} />}
            </button>

            {/* User Profile Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className="flex items-center focus:outline-none ring-2 ring-transparent hover:ring-primary-500 rounded-full transition-all"
              >
                <img 
                  src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" 
                  alt="User Profile" 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-slate-800 shadow-md"
                />
              </button>

              {/* Dropdown Menu */}
              <div className={`absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-gray-100 dark:border-slate-800 overflow-hidden transition-all origin-top-right ${isProfileOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'}`}>
                
                {/* User Info Header */}
                <div className="px-4 py-3 bg-gray-50 dark:bg-slate-800/50 border-b border-gray-100 dark:border-slate-800">
                  <p className="text-sm font-bold text-slate-900 dark:text-white truncate">John Doe</p>
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400 truncate">john@example.com</p>
                </div>

                <div className="p-2">
                  <Link to="/profile" onClick={() => setIsProfileOpen(false)} className="flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-slate-700 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-xl transition-colors">
                    <User size={16} /> My Account
                  </Link>
                  <button onClick={handleLogout} className="w-full flex items-center gap-3 px-3 py-2.5 text-sm font-bold text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl transition-colors mt-1">
                    <LogOut size={16} /> Log Out
                  </button>
                </div>
              </div>
            </div>
            
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none transition-colors"
            >
              {isDarkMode ? <Sun size={22} className="text-primary-400" /> : <Moon size={22} />}
            </button>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 focus:outline-none p-2 bg-gray-100 dark:bg-slate-800 rounded-full transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 shadow-2xl transition-all duration-300 origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
        <div className="px-4 py-6 space-y-4 flex flex-col">
          
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative mb-2">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search size={18} className="text-gray-400 dark:text-slate-500" />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tours..." 
              className="w-full pl-12 pr-4 py-3 bg-gray-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-gray-400 dark:placeholder-slate-500 rounded-2xl text-base font-medium focus:outline-none focus:ring-2 focus:ring-primary-600 transition-all"
            />
          </form>

          <Link to="/home" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-bold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-2xl transition-colors">Home</Link>
          <Link to="/tours" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-bold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-2xl transition-colors">All Packages</Link>
          <Link to="/my-bookings" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-bold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-2xl transition-colors">My Bookings</Link>
          <Link to="/faq" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-base font-bold text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-primary-50 dark:hover:bg-slate-800 rounded-2xl transition-colors">FAQ</Link>
          <div className="h-px bg-gray-200 dark:bg-slate-800 my-2"></div>
          
          {/* Mobile User Profile Info & Logout */}
          <div className="flex items-center gap-3 px-4 py-2">
            <img 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=150" 
              alt="User Profile" 
              className="w-12 h-12 rounded-full object-cover border-2 border-primary-500"
            />
            <div>
              <p className="text-sm font-black text-slate-900 dark:text-white">John Doe</p>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">john@example.com</p>
            </div>
          </div>
          
          <button onClick={handleLogout} className="w-full flex items-center justify-center gap-2 px-4 py-3.5 mt-2 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-2xl font-bold transition-colors">
            <LogOut size={18} /> Log Out
          </button>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;