import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';



// links ko update karna hai 
const AdminNavbar = () => {
  return (
    <nav className="admin-navbar">
      <ul className="admin-navbar__menu">
        <li className="admin-navbar__item">
          <Link to="/SearchUsers" className="admin-navbar__link">Users</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/manageLocations" className="admin-navbar__link">Locations</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/manageAccommodations" className="admin-navbar__link">Accommodations</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/ManageTransport" className="admin-navbar__link">Transportations</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/manageActivities" className="admin-navbar__link">Activities</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/manageBookings" className="admin-navbar__link">Bookings</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/managePlans" className="admin-navbar__link">Plans</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/manageReviews" className="admin-navbar__link">Reviews</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin/payments" className="admin-navbar__link">Payments</Link>
        </li>
        <li className="admin-navbar__item">
          <Link to="/admin" className="admin-navbar__link">Back</Link>
        </li>
        {/* Add more management options here */}
      </ul>
    </nav>
  );
};

export default AdminNavbar;
