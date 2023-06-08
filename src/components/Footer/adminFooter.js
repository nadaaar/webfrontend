import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';




//update linkssssss
const AdminFooter = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/SearchUsers">Manage Users</Link>
          </li>
          <li>
            <Link to="/manageLocations">Manage Locations</Link>
          </li>
          <li>
            <Link to="/manageAccommodations">Manage Accommodations</Link>
          </li>
          <li>
            <Link to="/ManageTransport">Manage Transportations</Link>
          </li>
          <li>
            <Link to="/manageActivities">Manage Activities</Link>
          </li>
          <li>
            <Link to="/manageBookings">Manage Bookings</Link>
          </li>
          <li>
            <Link to="/managePlans">Manage Plans</Link>
          </li>
          <li>
            <Link to="/manageReviews">Manage Reviews</Link>
          </li>
          <li>
            <Link to="/admin/payments">Manage Payments</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default AdminFooter;
