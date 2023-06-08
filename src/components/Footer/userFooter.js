import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css';


//update linksss

const UserFooter = () => {
  return (
    <footer className="footer">
      <nav>
        <ul>
          <li>
            <Link to="/profile">Manage Profile</Link>
          </li>
          <li>
            <Link to="/Locations">Explore Locations</Link>
          </li>
          <li>
            <Link to="/Accommodation">Browse Accommodations</Link>
          </li>
          <li>
            <Link to="/Transportation">Discover Transportations</Link>
          </li>
          <li>
            <Link to="/Activities">Find Activities</Link>
          </li>
          <li>
            <Link to="/Bookings">Manage Bookings</Link>
          </li>
          <li>
            <Link to="/Plans">View Plans</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
          <li>
            <Link to="/Reviews">Write Reviews</Link>
          </li>
        </ul>
      </nav>
      <div className="user-footer__details">
        <p>Email: fullmarks@travelagency.com</p>
        <p>Phone: 111-111-111</p>
      </div>
      <p>Travel Agency Website &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default UserFooter;
