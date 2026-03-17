import React from 'react';
import { Calendar, MapPin, XCircle } from 'lucide-react';

const mockBookings = [
  { id: 'BRK-8921', tour: 'Bali Tropical Escapade', date: 'Oct 15, 2026', guests: 2, status: 'Upcoming', total: 2400, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4' },
  { id: 'BRK-4432', tour: 'Kyoto Heritage Tour', date: 'Jan 10, 2026', guests: 1, status: 'Completed', total: 1800, image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e' },
];

const BookingHistory = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-950 min-h-screen py-12 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white mb-8 mt-10">My Bookings</h1>
        
        <div className="space-y-6">
          {mockBookings.map((booking) => (
            <div key={booking.id} className="bg-white dark:bg-slate-900 rounded-[2rem] p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row gap-6 items-center sm:items-start transition-all hover:shadow-md">
              <img src={booking.image} alt={booking.tour} className="w-full sm:w-48 h-32 object-cover rounded-2xl" />
              
              <div className="flex-1 w-full">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <p className="text-sm font-bold text-primary-600 dark:text-primary-400 mb-1">Booking ID: {booking.id}</p>
                    <h3 className="text-xl font-black text-slate-900 dark:text-white">{booking.tour}</h3>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                    booking.status === 'Upcoming' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400' : 
                    booking.status === 'Completed' ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
                  }`}>
                    {booking.status}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 gap-4 mt-4 text-sm text-gray-600 dark:text-slate-400 font-medium">
                  <div className="flex items-center gap-2"><Calendar size={16} className="text-slate-400" /> {booking.date}</div>
                  <div className="flex items-center gap-2"><MapPin size={16} className="text-slate-400" /> {booking.guests} Guest(s)</div>
                </div>
              </div>

              <div className="w-full sm:w-auto flex flex-col sm:items-end justify-between h-full space-y-4 sm:space-y-0 border-t sm:border-t-0 sm:border-l border-gray-100 dark:border-slate-800 pt-4 sm:pt-0 sm:pl-6 mt-4 sm:mt-0">
                <div className="text-2xl font-black text-slate-900 dark:text-white">${booking.total}</div>
                {booking.status === 'Upcoming' && (
                  <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2 border border-red-200 dark:border-red-900/50 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-xl font-bold transition-colors">
                    <XCircle size={16} /> Cancel
                  </button>
                )}
                {booking.status === 'Completed' && (
                  <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-5 py-2.5 bg-slate-900 dark:bg-primary-600 hover:bg-slate-800 dark:hover:bg-primary-700 text-white rounded-xl font-bold transition-colors">
                    Leave a Review
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookingHistory;