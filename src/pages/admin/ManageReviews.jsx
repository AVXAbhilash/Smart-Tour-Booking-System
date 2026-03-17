import React from 'react';
import { Search, Star, CheckCircle, XCircle, Trash2 } from 'lucide-react';
import AdminLayout from './AdminLayout';

// Mock Data
const mockReviews = [
  { id: 'REV-001', user: 'John Doe', tour: 'Bali Tropical Escapade', rating: 5, comment: 'Absolutely amazing experience! The guide was fantastic.', status: 'Approved', date: 'Feb 10, 2026' },
  { id: 'REV-002', user: 'Mike Johnson', tour: 'Swiss Alps Adventure', rating: 2, comment: 'The hotel was not up to standard and it rained every day.', status: 'Pending', date: 'Mar 01, 2026' },
  { id: 'REV-003', user: 'Alice Brown', tour: 'Kyoto Heritage Tour', rating: 4, comment: 'Great tour, but the bus was a bit uncomfortable.', status: 'Approved', date: 'Mar 12, 2026' },
];

const ManageReviews = () => {
  return (
    <AdminLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Manage Reviews</h1>
        <p className="text-gray-500 mt-1 font-medium">Moderate customer feedback and ratings for your tours.</p>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="Search reviews by tour or user..." 
              className="w-full pl-10 pr-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
          </div>
          <div className="flex gap-2">
            <select className="bg-white border border-gray-200 text-sm rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 font-medium text-slate-700">
              <option>All Statuses</option>
              <option>Pending</option>
              <option>Approved</option>
            </select>
          </div>
        </div>

        {/* Reviews Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider border-b border-gray-100">
                <th className="px-6 py-4 font-bold">Review Details</th>
                <th className="px-6 py-4 font-bold">Tour</th>
                <th className="px-6 py-4 font-bold">Status</th>
                <th className="px-6 py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {mockReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 max-w-md">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-slate-900">{review.user}</span>
                      <span className="text-gray-400 text-xs">• {review.date}</span>
                    </div>
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className={i < review.rating ? 'text-primary-500 fill-primary-500' : 'text-gray-300'} />
                      ))}
                    </div>
                    <p className="text-gray-600 italic truncate" title={review.comment}>"{review.comment}"</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-bold text-slate-700">{review.tour}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-3 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      review.status === 'Approved' ? 'bg-green-100 text-green-700' : 
                      review.status === 'Pending' ? 'bg-primary-100 text-primary-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {review.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right font-medium">
                    <div className="flex justify-end gap-2">
                      {review.status === 'Pending' && (
                        <>
                          <button className="text-green-600 hover:text-green-800 transition-colors bg-green-50 p-2 rounded-lg" title="Approve">
                            <CheckCircle size={16} />
                          </button>
                          <button className="text-orange-600 hover:text-orange-800 transition-colors bg-orange-50 p-2 rounded-lg" title="Reject">
                            <XCircle size={16} />
                          </button>
                        </>
                      )}
                      <button className="text-red-600 hover:text-red-800 transition-colors bg-red-50 p-2 rounded-lg" title="Delete">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ManageReviews;