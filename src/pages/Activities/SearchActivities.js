import React, { useState } from 'react';
//import axios from 'axios';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const ActivitySearchScreen = () => {
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  
  const searchActivityByName = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/viewActivityByName?name=${name}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.activities);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
        <Header />
        <Nav />
      <h3>Search Activities</h3>
      <div>
        <label>
          Search by Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button onClick={searchActivityByName}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((activities) => (
              <li key={activities.id}>Name: {activities.name}
                <ul key={activities.id}>Description: {activities.description}</ul>
                <ul key={activities.id}>Price: {activities.price}</ul>
                <ul key={activities.id}>Rating: {activities.rating}</ul>
                <ul key={activities.id}>Reviews: {activities.reviews}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No activities found</p>
        )}
      </div>
        <Footer />
    </div>
  );
};

export default ActivitySearchScreen;
