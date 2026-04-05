# 🌍 BookingBuddy

A premium, modern, and highly interactive Tour Booking Platform built as a robust MERN stack application. This repository currently contains the comprehensive React.js frontend architecture, featuring a sleek glassmorphism UI, deep dark mode integration, and a dedicated high-end Admin panel.

## ✨ Key Features

### 🧑‍💻 User Experience (Client-Side)
* **Smart Global Search:** Seamlessly search for destinations, tour types, or pricing directly from the Navbar or Home page, auto-filling the Packages filter.
* **Advanced Multi-Filtering:** Real-time filtering on the Packages page by search query, dynamic price sliders, and checkbox duration ranges.
* **Interactive Modals:** * Sleek Auth Interceptors for protected actions.
  * Simulated Secure Checkout/Payment modal with processing animations.
  * Interactive Star-Rating Review modal and Cancellation Confirmation modals.
* **Dynamic Profile Management:** Users can update their personal details, change passwords, and upload profile pictures (temporarily simulated via `URL.createObjectURL` and `localStorage`).
* **Persistent Dark/Light Theme:** Global theme toggling that saves user preferences across sessions.
* **Immersive UI:** Video backgrounds, frosted glass (backdrop-blur) components, and smooth hover/active state transitions using Tailwind CSS.

### 🛡️ Admin Dashboard
* **Secure Admin Portal:** Dedicated `/admin/login` routing separate from user authentication.
* **Premium Dark-Mode Layout:** A cohesive, slate-themed dashboard designed to mimic high-end SaaS platforms.
* **Comprehensive Data Management:** Interfaces ready to handle CRUD operations for:
  * Active Tour Packages (`/admin/tours`)
  * User Accounts (`/admin/users`)
  * Booking Statuses (`/admin/bookings`)
  * Customer Reviews (`/admin/reviews`)
* **Admin Account Settings:** Dedicated profile management for system administrators.

## 🛠️ Tech Stack

* **Frontend Framework:** React.js (Vite / Create React App)
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM (v6)
* **Icons:** Lucide-React
* **State Management:** React Hooks (`useState`, `useEffect`) & `localStorage` for temporary persistence.

## 📂 Project Structure

```text
src/
├── components/
│   ├── Footer.jsx           # Global & responsive footer
│   ├── Navbar.jsx           # Dynamic navigation with auth & theme states
│   ├── ProtectedRoute.jsx   # Route wrapper for authenticated users
│   ├── ScrollToTop.jsx      # Auto-scroll utility for SPA routing
│   └── TourCard.jsx         # Reusable UI component for tour packages
├── data/
│   └── tours.js             # Local JSON mock data for development
├── pages/
│   ├── admin/               # Admin Dashboard Pages
│   │   ├── AdminAccount.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminLayout.jsx  # Master wrapper for admin UI
│   │   ├── AdminLogin.jsx
│   │   ├── ManageReviews.jsx
│   │   ├── ManageTours.jsx
│   │   ├── ManageUsers.jsx
│   │   └── ViewBookings.jsx
│   ├── auth/                # Authentication Pages
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   ├── legal/               # Informational Pages
│   │   ├── CancellationPolicy.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   └── TermsOfService.jsx
│   ├── user/                # Client-Facing Pages
│   │   ├── BookingHistory.jsx
│   │   ├── FAQ.jsx
│   │   ├── Home.jsx
│   │   ├── Packages.jsx
│   │   ├── Profile.jsx
│   │   └── TourDetails.jsx
│   └── NotFound.jsx         # 404 Error Page
├── App.jsx                  # Main application router and layout logic
└── index.css                # Global Tailwind imports and custom styles
