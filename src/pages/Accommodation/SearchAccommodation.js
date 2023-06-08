import React, { useState } from 'react';
//import axios from 'axios';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const AccommodationSearchScreen = () => {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  
  const searchAccommodationByName = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/viewAccommodationByName?name=${name}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.accommodations);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
        <Header />
        <Nav />
      <h3>Search Accommodation</h3>
      <div>
        <label>
          Search by Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button onClick={searchAccommodationByName}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((accommodations) => (
              <li key={accommodations.id}>Name: {accommodations.name}
                <ul key={accommodations.id}>Description: {accommodations.description}</ul>
                <ul key={accommodations.id}>Address: {accommodations.address}</ul>
                <ul key={accommodations.id}>Price: {accommodations.price}</ul>
                <ul key={accommodations.id}>Amenities: {accommodations.amenities}</ul>
                <ul key={accommodations.id}>Reviews: {accommodations.reviews}</ul>
              
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No accommodations found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AccommodationSearchScreen;
