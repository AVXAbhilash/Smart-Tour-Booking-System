import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <Globe className="text-primary-500" size={28} />
              <span className="font-bold text-2xl tracking-tight text-white">
                Booking<span className="text-primary-500">Buddy</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Experience the world with smart, seamless, and secure tour booking. Your next adventure starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Explore</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/" className="hover:text-primary-400 transition-colors">Destinations</Link></li>
              <li><Link to="/tours" className="hover:text-primary-400 transition-colors">All Packages</Link></li>
              <li><Link to="/login" className="hover:text-primary-400 transition-colors">User Account</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="#" className="hover:text-primary-400 transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-primary-400 transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-primary-400 transition-colors">Cancellation Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 tracking-wider uppercase text-sm">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><Mail size={16} className="text-primary-500"/> bookingbuddy@gmail.com</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-primary-500"/> +91 98765 43210</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-primary-500"/> Bhubaneswar</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} BookingBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;  