import React, { useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const DeleteAccommodation = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteAccommodation = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/deleteAccommodation`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to delete accommodation');
    }
  };

  return (
    <div>
        <Header />
        <Nav />
      <h3>Delete Accommodation</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleDeleteAccommodation}>Delete Accommodation</button>

      {message && <p>{message}</p>}
        <Footer />
    </div>
  );
};

export default DeleteAccommodation;