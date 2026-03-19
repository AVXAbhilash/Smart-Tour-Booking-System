import React, { useState } from "react";
// import { Link } from "react-router-dom";
import {
  Search,
  // MapPin,
  // Clock,
  // Star,
  Filter,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";
import { tourData } from "../data/tours";
import TourCard from "../../components/TourCard";

// Mock Data
const mockPackages = [
  {
    id: "TR-101",
    title: "Bali Tropical Escapade",
    location: "Indonesia",
    price: 1200,
    days: 5,
    rating: 4.8,
    reviews: 124,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: "TR-102",
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    price: 2400,
    days: 7,
    rating: 4.9,
    reviews: 89,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
  },
  {
    id: "TR-103",
    title: "Odisha Coastal Motorcycle Tour",
    location: "India",
    price: 850,
    days: 6,
    rating: 4.7,
    reviews: 56,
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
  },
  {
    id: "TR-104",
    title: "Kyoto Heritage Walk",
    location: "Japan",
    price: 1800,
    days: 6,
    rating: 4.9,
    reviews: 210,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  },
  {
    id: "TR-105",
    title: "Santorini Island Hopper",
    location: "Greece",
    price: 1950,
    days: 8,
    rating: 4.6,
    reviews: 78,
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e",
  },
  {
    id: "TR-106",
    title: "Machu Picchu Trek",
    location: "Peru",
    price: 1500,
    days: 10,
    rating: 4.8,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1587595431973-160d0d94add1",
  },
];

const Packages = () => {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <div className="bg-gray-50 dark:bg-slate-950 min-h-screen pb-20 transition-colors duration-300">
      {/* Page Header */}
      <div className="relative h-[40vh] bg-slate-900 flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05"
          alt="Explore Packages"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        <div className="relative z-10 text-center px-4 mt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
            Explore All Packages
          </h1>
          <p className="text-lg text-primary-100 max-w-2xl mx-auto font-medium">
            Find the perfect destination for your next unforgettable journey.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:-mt-10 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden w-full bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 font-bold text-slate-700 dark:text-slate-200 flex justify-center items-center gap-2"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <SlidersHorizontal size={18} /> Filters & Sorting
          </button>

          {/* Left Sidebar: Filters */}
          <aside
            className={`w-full lg:w-1/4 ${isMobileFilterOpen ? "block" : "hidden"} lg:block`}
          >
            <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-xl lg:shadow-sm border border-gray-100 dark:border-slate-800 sticky top-28 transition-colors">
              <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white mb-6 pb-4 border-b border-gray-100 dark:border-slate-800">
                <Filter
                  size={20}
                  className="text-primary-600 dark:text-primary-400"
                />{" "}
                Filter Tours
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search
                      size={16}
                      className="text-gray-400 dark:text-slate-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Tour name..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 text-slate-900 dark:text-white transition-colors text-sm font-medium placeholder-gray-400 dark:placeholder-slate-500"
                  />
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Max Price: $3000
                </label>
                <input
                  type="range"
                  min="100"
                  max="5000"
                  className="w-full accent-primary-600 h-2 bg-gray-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-500 dark:text-slate-400 mt-2 font-medium">
                  <span>$100</span>
                  <span>$5000+</span>
                </div>
              </div>

              {/* Duration */}
              <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-3">
                  Duration
                </label>
                <div className="space-y-3">
                  {["1 - 3 Days", "4 - 7 Days", "8 - 14 Days", "15+ Days"].map(
                    (duration, i) => (
                      <label
                        key={i}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="checkbox"
                          className="w-5 h-5 rounded border-gray-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary-600 focus:ring-primary-500 cursor-pointer"
                        />
                        <span className="text-gray-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                          {duration}
                        </span>
                      </label>
                    ),
                  )}
                </div>
              </div>

              <button className="w-full bg-primary-50 dark:bg-primary-600/20 text-primary-700 dark:text-primary-400 hover:bg-primary-600 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white font-bold py-3 rounded-xl transition-colors mt-4">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Right Column: Tour Grid & Sorting */}
          <main className="w-full lg:w-3/4">
            {/* Top Bar */}
            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-800 mb-6 flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Showing{" "}
                <span className="font-bold text-slate-900 dark:text-white">
                  {mockPackages.length}
                </span>{" "}
                tours found
              </p>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Sort by:
                </span>
                <div className="relative w-full sm:w-48">
                  <select className="w-full appearance-none bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-2.5 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-600 font-medium text-sm cursor-pointer">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest Rated</option>
                  </select>
                  <ChevronDown
                    size={16}
                    className="absolute right-3 top-3 text-gray-500 dark:text-slate-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>

            {/* Tours Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Here we show all tours from the data file */}
              {tourData.map((tour) => (
                <TourCard key={tour.id} tour={tour} />
              ))}
            </div>

            {/* Pagination / Load More */}
            <div className="mt-10 flex justify-center">
              <button className="bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 font-bold py-3 px-8 rounded-xl transition-colors">
                Load More Packages
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Packages;
