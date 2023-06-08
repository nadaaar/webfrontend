import React, { useState } from 'react';
//import axios from 'axios';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const UserSearchScreen = () => {
  const [interest, setInterest] = useState('');
  const [name, setName] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInterestChange = (e) => {
    setInterest(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const searchUsersByInterests = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/SearchUserByInterests?interest=${interest}`, {
        method: 'GET',
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.users);
    } catch (error) {
      console.error(error);
    }
  };
  
  const searchUsersByName = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/SearchUserByName?name=${name}`, {
        method: 'GET',
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.users);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <Header />
      <Nav />
      <h3>Search Users</h3>
      <div>
        <label>
          Search by Interests:
          <input type="text" value={interest} onChange={handleInterestChange} />
        </label>
        <button onClick={searchUsersByInterests}>Search</button>
      </div>
      <div>
        <label>
          Search by Name:
          <input type="text" value={name} onChange={handleNameChange} />
        </label>
        <button onClick={searchUsersByName}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((user) => (
              <li key={user.id}>{user.name}
                <ul key={user.id}>{user.email}</ul>
                <ul key={user.id}>{user.interests}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No users found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default UserSearchScreen;
