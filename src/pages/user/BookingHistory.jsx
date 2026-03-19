import React from 'react';
import { Calendar, MapPin, XCircle } from 'lucide-react';

const mockBookings = [
  { 
    id: 'BRK-8921', 
    tour: 'Puri & Konark', 
    date: 'Oct 15, 2026', 
    guests: 2, 
    status: 'Upcoming', 
    total: 2400, 
    image: 'https://admin.bookodisha.com/images/pages/Discover-the-Best-03_1657554549.jpg' 
  },
  { 
    id: 'BRK-4432', 
    tour: 'Chilika Lake', 
    date: 'Jan 10, 2026', 
    guests: 1, 
    status: 'Completed', 
    total: 18000, 
    image: 'https://otdc.odisha.gov.in/storage/explore/1707229583_chilikalake.webp' 
  },
];

const BookingHistory = () => {
  return (
    <div className="relative min-h-screen transition-colors duration-300">
      
      {/* --- FIXED FULL-PAGE VIDEO BACKGROUND --- */}
      <div className="fixed inset-0 z-0 bg-slate-900">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-90 scale-105"
        >
          <source src="/hero1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* NEW: Frosted Glass Blur Overlay! */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-white/40 dark:to-slate-950/60 backdrop-blur-lg transition-colors duration-500"></div>
      </div>

      {/* --- SCROLLABLE CONTENT --- */}
      <div className="relative z-10 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mt-10 mb-8">
            <h1 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight drop-shadow-sm">My Bookings</h1>
            <p className="text-slate-800 dark:text-slate-300 font-bold mt-1 drop-shadow-md">Manage your upcoming and past adventures.</p>
          </div>
          
          <div className="space-y-6">
            {mockBookings.map((booking) => (
              <div 
                key={booking.id} 
                className="bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl rounded-[2rem] p-4 sm:p-6 shadow-lg border border-white/40 dark:border-slate-700/50 flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all hover:shadow-2xl dark:hover:shadow-primary-900/20 group"
              >
                <div className="relative w-full sm:w-48 h-32 overflow-hidden rounded-2xl shadow-sm">
                  <img 
                    src={booking.image} 
                    alt={booking.tour} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="text-sm font-bold text-primary-700 dark:text-primary-400 mb-1">Booking ID: {booking.id}</p>
                      <h3 className="text-xl font-black text-slate-900 dark:text-white">{booking.tour}</h3>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-sm ${
                      booking.status === 'Upcoming' ? 'bg-primary-100 text-primary-800 dark:bg-primary-900/50 dark:text-primary-300' : 
                      booking.status === 'Completed' ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' : 'bg-red-100 text-red-800 dark:bg-red-900/50 dark:text-red-300'
                    }`}>
                      {booking.status}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-slate-700 dark:text-slate-300 font-bold">
                    <div className="flex items-center gap-2"><Calendar size={16} className="text-slate-500 dark:text-slate-400" /> {booking.date}</div>
                    <div className="flex items-center gap-2"><MapPin size={16} className="text-slate-500 dark:text-slate-400" /> {booking.guests} Guest(s)</div>
                  </div>
                </div>

                <div className="w-full sm:w-auto flex flex-col sm:items-end justify-between h-full space-y-4 sm:space-y-0 border-t sm:border-t-0 sm:border-l border-white/50 dark:border-slate-700/50 pt-4 sm:pt-0 sm:pl-6 mt-4 sm:mt-0">
                  <div className="text-2xl font-black text-slate-900 dark:text-white">₹{booking.total}</div>
                  
                  {booking.status === 'Upcoming' && (
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 bg-white/50 dark:bg-slate-800/50 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/40 rounded-xl font-bold transition-colors">
                      <XCircle size={16} /> Cancel
                    </button>
                  )}
                  {booking.status === 'Completed' && (
                    <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-slate-900 dark:bg-primary-600 hover:bg-slate-800 dark:hover:bg-primary-700 text-white rounded-xl font-bold transition-colors shadow-lg shadow-slate-900/20 dark:shadow-primary-900/20">
                      Leave a Review
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;