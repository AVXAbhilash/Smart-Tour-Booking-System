import React from 'react';
import { MapPin, Clock, Users, Star, CheckCircle } from 'lucide-react';

const TourDetails = () => {
  return (
    <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-20 transition-colors duration-300">
      {/* Tour Hero Image */}
      <div className="h-[50vh] w-full relative">
        <img src="https://images.unsplash.com/photo-1537996194471-e657df975ab4" alt="Bali" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full p-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-primary-300 font-medium mb-2">
            <MapPin size={18} /> Indonesia
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white">Bali Tropical Escapade</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Details & Reviews */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
            <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-gray-100 dark:border-slate-800">
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><Clock className="text-primary-600 dark:text-primary-400" /> 5 Days / 4 Nights</div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><Users className="text-primary-600 dark:text-primary-400" /> Max 12 People</div>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-bold"><Star className="text-primary-500 fill-primary-500" /> 4.8 (124 Reviews)</div>
            </div>
            
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Overview</h2>
            <p className="text-gray-600 dark:text-slate-400 leading-relaxed mb-8 font-medium">
              Experience the magic of Bali with our curated tropical escapade. From the lush rice terraces of Ubud to the pristine beaches of Seminyak, this tour offers the perfect blend of culture, relaxation, and adventure.
            </p>

            <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">What's Included</h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-600 dark:text-slate-400 font-medium">
              {['4 Nights Luxury Accommodation', 'Daily Buffet Breakfast', 'Airport Transfers', 'Guided Temple Tours', 'Snorkeling Equipment'].map((item, index) => (
                <li key={index} className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> {item}</li>
              ))}
            </ul>
          </div>
          
          {/* Reviews Section Placeholder */}
          <div className="bg-white dark:bg-slate-900 p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 transition-colors">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Guest Reviews</h2>
            <div className="text-center py-8 text-gray-500 dark:text-slate-500 border-2 border-dashed border-gray-100 dark:border-slate-700 rounded-xl font-medium">
              Reviews component will be implemented here.
            </div>
          </div>
        </div>

        {/* Right Column: Sticky Booking Card */}
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl dark:shadow-primary-900/10 border border-gray-100 dark:border-slate-800 sticky top-28 transition-colors">
            <div className="text-3xl font-black text-slate-900 dark:text-white mb-2">$1,200 <span className="text-base font-medium text-gray-500 dark:text-slate-500">/ person</span></div>
            <div className="flex items-center gap-1 text-sm font-bold text-gray-500 dark:text-slate-400 mb-6 pb-6 border-b border-gray-100 dark:border-slate-800">
              <Star size={14} className="text-primary-500 fill-primary-500" /> 4.8 rating
            </div>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Select Date</label>
                <input type="date" className="w-full p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600 dark:[color-scheme:dark]" />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-1">Guests</label>
                <select className="w-full p-3 bg-gray-50 dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-600">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                </select>
              </div>
              <button className="w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 rounded-xl transition-colors shadow-lg shadow-primary-500/30 mt-4">
                Proceed to Book
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourDetails;