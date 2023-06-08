
import React, { useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';

const DeleteBookingByType = () => {
  const [bookingType, setBookingType] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteBooking = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/deleteBookingByType`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ bookingType }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete booking');
    }
  };

  return (
    <div>
        <Header />
        <Nav />
      <h3>Delete Booking By Type</h3>
      <label htmlFor="bookingType">Booking Type:</label>
      <input type="text" id="bookingType" value={bookingType} onChange={(e) => setBookingType(e.target.value)} />

      <button onClick={handleDeleteBooking}>Delete Booking</button>

      {message && <p>{message}</p>}
        <Footer />
    </div>
  );
};

export default DeleteBookingByType;