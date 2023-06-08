import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';




//update the links
const UserNavbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__menu">
      <li className="navbar__item">
          <Link to="/user" className="user-navbar__link">Back</Link>
        </li>
        <li className="navbar__item">
          <Link to="/profile" className="user-navbar__link">Profile</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Locations" className="user-navbar__link">Locations</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Accommodation" className="user-navbar__link">Accommodations</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Transportation" className="user-navbar__link">Transportations</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Activities" className="user-navbar__link">Activities</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Bookings" className="user-navbar__link">Bookings</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Plans" className="user-navbar__link">Plans</Link>
        </li>
        <li className="navbar__item">
          <Link to="/search" className="user-navbar__link">Search</Link>
        </li>
        <li className="navbar__item">
          <Link to="/Reviews" className="user-navbar__link">Reviews</Link>
        </li>
       
        {/* Add more options here */}
      </ul>
    </nav>
  );
};

export default UserNavbar;
