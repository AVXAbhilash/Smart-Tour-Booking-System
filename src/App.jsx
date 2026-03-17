import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// User Pages
import Home from './pages/user/Home';
import Packages from './pages/user/Packages';
import TourDetails from './pages/user/TourDetails';
import BookingHistory from './pages/user/BookingHistory';
import FAQ from './pages/user/FAQ'; // <-- Imported FAQ

// Auth Pages
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

// Admin Pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageTours from './pages/admin/ManageTours';
import ManageUsers from './pages/admin/ManageUsers';
import ManageReviews from './pages/admin/ManageReviews';
import ViewBookings from './pages/admin/ViewBookings';

// 404 Page
import NotFound from './pages/NotFound';

function App() {
  const location = useLocation();

  // Hide Navbar/Footer for Admin routes, Auth routes, and the 404 page
  const isAdminRoute = location.pathname.startsWith('/admin');
  const isAuthRoute = location.pathname === '/' || location.pathname === '/login' || location.pathname === '/register';
  
  // FIX: We added '/faq' to this array so the app knows to show the Navbar/Footer!
  const isKnownUserRoute = [
    '/home', 
    '/tours', 
    '/my-bookings', 
    '/faq' 
  ].includes(location.pathname) || location.pathname.startsWith('/tours/');
  
  const showGlobalLayout = !isAdminRoute && !isAuthRoute && isKnownUserRoute;

  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      
      {showGlobalLayout && <Navbar />}
      
      <main className={`flex-grow ${showGlobalLayout ? 'pt-16 md:pt-20' : ''}`}>
        <Routes>
          {/* ----- AUTH ROUTES (Entry Points) ----- */}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* ----- USER ROUTES ----- */}
          <Route path="/home" element={<Home />} />
          <Route path="/tours" element={<Packages />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/my-bookings" element={<BookingHistory />} />
          <Route path="/faq" element={<FAQ />} /> {/* <-- Added FAQ Route */}

          {/* ----- ADMIN ROUTES ----- */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/tours" element={<ManageTours />} />
          <Route path="/admin/bookings" element={<ViewBookings />} />
          <Route path="/admin/users" element={<ManageUsers />} />
          <Route path="/admin/reviews" element={<ManageReviews />} />

          {/* ----- 404 CATCH-ALL ----- */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {showGlobalLayout && <Footer />}
    </div>
  );
}

export default App;