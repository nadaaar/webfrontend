import React, { useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const DeleteLocation = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteLocation = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/deleteLocation`, {
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
      setMessage('Failed to delete location');
    }
  };

  return (
    <div>
        <Header />
        <Nav />
      <h3>Delete Location</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <button onClick={handleDeleteLocation}>Delete Location</button>

      {message && <p>{message}</p>}
        <Footer />
    </div>
  );
};

export default DeleteLocation;