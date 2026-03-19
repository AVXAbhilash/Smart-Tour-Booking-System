import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Calendar,
  Star,
  Mountain,
  Palmtree,
  Building,
  Compass,
  HelpCircle,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { tourData } from "../data/tours";
import TourCard from "../../components/TourCard";

const categories = [
  {
    name: "Mountain Treks",
    icon: Mountain,
    color:
      "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400",
  },
  {
    name: "Beach Holidays",
    icon: Palmtree,
    color: "bg-cyan-100 text-cyan-600 dark:bg-cyan-500/20 dark:text-cyan-400",
  },
  {
    name: "City Explorers",
    icon: Building,
    color:
      "bg-purple-100 text-purple-600 dark:bg-purple-500/20 dark:text-purple-400",
  },
  {
    name: "Adventure",
    icon: Compass,
    color:
      "bg-orange-100 text-orange-600 dark:bg-orange-500/20 dark:text-orange-400",
  },
];

// FAQ Data
const faqs = [
  {
    question: "How do I book a tour on Briskode Tours?",
    answer:
      "Booking is simple! Browse our Packages page, select your desired destination, choose your dates and number of guests on the Tour Details page, and click 'Proceed to Book'. You can then complete your payment securely.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel for a full refund up to 7 days before your tour's start date. Cancellations made within 7 days of the tour are subject to a 50% cancellation fee. No-shows will not be refunded.",
  },
  {
    question: "Are flights included in the package prices?",
    answer:
      "No, our standard packages cover accommodation, guided tours, local transfers, and specified meals. International or domestic flights to the starting destination are not included unless explicitly stated in the tour details.",
  },
  {
    question: "Is it safe to pay online through your platform?",
    answer:
      "Absolutely. We use industry-standard encryption and partner with secure payment gateways to ensure your financial data is completely protected.",
  },
  {
    question: "Can I customize a tour package?",
    answer:
      "Currently, our packages are pre-set to offer the best curated experience. However, if you have a group of 6 or more, please contact our support team to discuss private, customized itineraries.",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  // State for the FAQ accordion
  const [openFaqIndex, setOpenFaqIndex] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.append("dest", destination.toLowerCase());
    if (date) params.append("date", date);
    navigate(`/tours?${params.toString()}`);
  };

  const toggleFAQ = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 dark:bg-slate-950 min-h-screen transition-colors duration-300">
      {/* --- HERO SECTION --- */}
      {/* RESTORED THIS MISSING WRAPPER DIV */}
      <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video & Gradients */}
        <div className="absolute inset-0 bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-60 scale-105"
          >
            {/* React automatically looks in the 'public' folder. 
              Since your file is 'public/hero.mp4', you just write '/hero.mp4' 
            */}
            <source src="/hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-gray-50 dark:to-slate-950 transition-colors duration-300"></div>

        <div className="relative z-10 text-center px-4 pt-16 md:pt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-medium text-sm mb-6 shadow-lg">
            <Star size={16} className="text-yellow-400 fill-yellow-400" />
            Tour Booking Platform
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter drop-shadow-2xl">
            Find Your Next <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-yellow-300">
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
              <MapPin
                size={14}
                className="text-primary-600 dark:text-primary-400"
              />{" "}
              Destination
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
              <Calendar
                size={14}
                className="text-primary-600 dark:text-primary-400"
              />{" "}
              Dates
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
              <h3 className="font-bold text-slate-900 dark:text-white">
                {category.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* --- FEATURED TOURS SECTION --- */}
      {/* RESTORED THE MISSING WRAPPER AND HEADINGS HERE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 border-b border-gray-200 dark:border-slate-800/50">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
              Trending Destinations
            </h2>
            <p className="text-lg text-gray-500 dark:text-slate-400 mt-2 font-medium">
              Handpicked premium packages for your next adventure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {tourData.slice(0, 6).map((tour) => (
            <TourCard key={tour.id} tour={tour} />
          ))}
        </div>
      </div>

      {/* --- FAQ SECTION --- */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 pb-32">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mb-4">
            <HelpCircle
              size={32}
              className="text-primary-600 dark:text-primary-400"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 dark:text-slate-400 font-medium">
            Everything you need to know about booking with BookingBuddy.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-slate-900 rounded-2xl border transition-all duration-300 ${
                openFaqIndex === index
                  ? "border-primary-500 dark:border-primary-500 shadow-md shadow-primary-500/10"
                  : "border-gray-200 dark:border-slate-800 shadow-sm hover:border-primary-300 dark:hover:border-primary-800"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span
                  className={`font-bold text-lg ${
                    openFaqIndex === index
                      ? "text-primary-600 dark:text-primary-400"
                      : "text-slate-900 dark:text-white"
                  }`}
                >
                  {faq.question}
                </span>
                {openFaqIndex === index ? (
                  <ChevronUp
                    className="text-primary-500 flex-shrink-0 ml-4"
                    size={20}
                  />
                ) : (
                  <ChevronDown
                    className="text-slate-400 dark:text-slate-500 flex-shrink-0 ml-4"
                    size={20}
                  />
                )}
              </button>

              <div
                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                  openFaqIndex === index
                    ? "max-h-96 pb-5 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-gray-600 dark:text-slate-400 font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
