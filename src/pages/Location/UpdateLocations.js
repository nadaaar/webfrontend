import React, { useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const UpdateLocation = () => {
  const [name, setName] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImageUrl, setNewImageUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdateLocation = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/updateLocation`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, newDescription, newImageUrl }),
      });

      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error(error);
      setMessage('Failed to update location');
    }
  };

  return (
    <div>
        <Header />
        <Nav />
      <h3>Update Location</h3>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />

      <label htmlFor="newDescription">New Description:</label>
      <input
        type="text"
        id="newDescription"
        value={newDescription}
        onChange={(e) => setNewDescription(e.target.value)}
      />

      <label htmlFor="newImageUrl">New Image URL:</label>
      <input
        type="text"
        id="newImageUrl"
        value={newImageUrl}
        onChange={(e) => setNewImageUrl(e.target.value)}
      />

      <button onClick={handleUpdateLocation}>Update Location</button>

      {message && <p>{message}</p>}
        <Footer />
    </div>
  );
};

export default UpdateLocation;