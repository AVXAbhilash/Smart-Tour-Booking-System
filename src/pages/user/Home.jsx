import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Star,
  Clock,
  Mountain,
  Palmtree,
  Building,
  Compass,
} from "lucide-react";

// Mock Data for Featured Tours
const featuredTours = [
  {
    id: "TR-101",
    title: "Bali Tropical Escapade",
    location: "Indonesia",
    price: 1200,
    days: 5,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
  },
  {
    id: "TR-102",
    title: "Swiss Alps Adventure",
    location: "Switzerland",
    price: 2400,
    days: 7,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99",
  },
  {
    id: "TR-104",
    title: "Kyoto Heritage Tour",
    location: "Japan",
    price: 1800,
    days: 6,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e",
  },
];

// Added dark mode color variants to the categories
const categories = [
  {
    name: "Mountain Treks",
    icon: Mountain,
    color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
  {
    name: "Beach Holidays",
    icon: Palmtree,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
  },
  {
    name: "City Explorers",
    icon: Building,
    color: "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  { 
    name: "Adventure", 
    icon: Compass, 
    color: "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400" 
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  // Handle the search form submission
  const handleSearch = (e) => {
    e.preventDefault();

    // Create query parameters
    const params = new URLSearchParams();
    if (destination) params.append("dest", destination.toLowerCase());
    if (date) params.append("date", date);

    // Navigate to the Packages page with the applied filters
    navigate(`/tours?${params.toString()}`);
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* --- HERO SECTION --- */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image & Gradients */}
        <div className="absolute inset-0 bg-slate-900">
          <img
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
            alt="Travel Hero"
            className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-gray-50 dark:to-slate-950 transition-colors duration-300"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 pt-16 md:pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm mb-6 shadow-lg">
            <Star size={16} className="text-primary-400 fill-primary-400" />
            Tour Booking Platform
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
            Find Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-cyan-300">
              Escape
            </span>
          </h1>
          <p className="text-lg md:text-xl text-primary-50 mb-8 max-w-2xl mx-auto drop-shadow-md font-medium">
            Discover breathtaking destinations, exclusive packages, and
            unforgettable experiences worldwide.
          </p>
        </div>
      </div>

      {/* --- FUNCTIONAL SEARCH BAR --- */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-20">
        <form
          onSubmit={handleSearch}
          className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl p-3 md:p-4 rounded-[2rem] shadow-2xl border border-white/60 dark:border-slate-800 flex flex-col md:flex-row gap-3 items-center justify-between transition-all hover:shadow-primary-900/10 dark:hover:shadow-primary-900/40 hover:bg-white dark:hover:bg-slate-900"
        >
          <div className="flex flex-col w-full md:w-auto flex-1 px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-800/50 rounded-2xl transition-colors cursor-text">
            <label className="text-xs font-black text-slate-800 dark:text-slate-300 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <MapPin size={14} className="text-primary-600 dark:text-primary-400" /> Destination
            </label>
            <input
              type="text"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder="Where are you going?"
              className="bg-transparent text-lg text-slate-900 dark:text-white focus:outline-none placeholder-gray-400 dark:placeholder-slate-500 font-semibold w-full"
            />
          </div>

          <div className="hidden md:block w-px h-14 bg-gray-200 dark:bg-slate-800"></div>

          <div className="flex flex-col w-full md:w-auto flex-1 px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-800/50 rounded-2xl transition-colors cursor-pointer">
            <label className="text-xs font-black text-slate-800 dark:text-slate-300 uppercase tracking-widest mb-1 flex items-center gap-1.5">
              <Calendar size={14} className="text-primary-600 dark:text-primary-400" /> Dates
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="bg-transparent text-lg text-slate-900 dark:text-white focus:outline-none font-semibold w-full cursor-pointer dark:[color-scheme:dark]"
            />
          </div>
          
          <button 
            type="submit"
            className="w-full md:w-auto bg-slate-900 dark:bg-primary-600 hover:bg-primary-600 dark:hover:bg-primary-500 text-white px-10 py-5 rounded-[1.5rem] font-bold transition-all duration-300 shadow-xl shadow-slate-900/20 dark:shadow-primary-900/20 hover:shadow-primary-600/30 flex items-center justify-center gap-2"
          >
            <Search size={20} /> Search
          </button>
        </form>
      </div>

      {/* --- CATEGORIES SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col items-center justify-center gap-4 hover:-translate-y-2 transition-transform duration-300 cursor-pointer hover:shadow-xl dark:hover:shadow-primary-900/10"
            >
              <div className={`p-4 rounded-2xl ${category.color}`}>
                <category.icon size={32} strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- FEATURED TOURS SECTION --- */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Trending Destinations
            </h2>
            <p className="text-lg text-gray-500 dark:text-slate-400 mt-2 font-medium">
              Handpicked premium packages for your next adventure.
            </p>
          </div>
          <Link
            to="/tours"
            className="text-primary-600 dark:text-primary-400 font-bold hover:text-primary-800 dark:hover:text-primary-300 transition-colors flex items-center gap-1 bg-primary-50 dark:bg-primary-900/30 px-5 py-2.5 rounded-full"
          >
            View all tours &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {featuredTours.map((tour) => (
            <Link
              to={`/tours/${tour.id}`}
              key={tour.id}
              className="group bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl dark:hover:shadow-primary-900/20 transition-all duration-500 border border-gray-100 dark:border-slate-800 flex flex-col h-full hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-72 overflow-hidden m-3 rounded-[2rem]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Floating Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-black flex items-center gap-1.5 shadow-lg dark:text-white">
                  <Star size={16} className="text-primary-500 fill-primary-500" />{" "}
                  {tour.rating}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 pt-4 flex flex-col flex-grow">
                <div className="flex items-center gap-1.5 text-sm text-primary-600 dark:text-primary-400 font-bold mb-3">
                  <MapPin size={16} /> {tour.location}
                </div>

                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {tour.title}
                </h3>

                <div className="mt-auto flex justify-between items-end border-t border-gray-100 dark:border-slate-800 pt-5">
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1">
                      Duration
                    </span>
                    <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold">
                      <Clock size={18} className="text-primary-500 dark:text-primary-400" /> {tour.days}{" "}
                      Days
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-bold text-gray-400 dark:text-slate-500 uppercase tracking-wider mb-1 block">
                      Starting from
                    </span>
                    <div className="text-2xl font-black text-slate-900 dark:text-white">
                      ${tour.price}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;