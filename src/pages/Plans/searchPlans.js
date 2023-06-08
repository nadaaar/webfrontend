import React, { useState } from 'react';
//import axios from 'axios';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const PlanSearchScreen = () => {
  const [status, setStatus] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleNameChange = (e) => {
    setStatus(e.target.value);
  };

  
  const searchPlanByName = async () => {
    try {
      const response = await fetch(`https://asliprojectt.onrender.com/user/viewPlanByStatus?status=${status}`, {
        method: 'GET', 
        mode: 'cors',
      });
  
      const data = await response.json();
      setSearchResults(data.plan);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div>
      <Header />
      <Nav />
      <h3>Search Plan</h3>
      <div>
        <label>
          Search by Status:
          <input type="text" value={status} onChange={handleNameChange} />
        </label>
        <button onClick={searchPlanByName}>Search</button>
      </div>
      <div>
        <h4>Search Results:</h4>
        {searchResults.length > 0 ? (
          <ul>
            {searchResults.map((plan) => (
              <li key={plan.id}>Name: {plan.user.name}
                {/* <ul key={plan.id}>Accommodations: {plan.accommodations}</ul>
                <ul key={plan.id}>Transportations: {plan.transportation}</ul>
                <ul key={plan.id}>Activities: {plan.activities}</ul> */}
                <ul key={plan.id}>Total Price: {plan.totalPrice}</ul>
                <ul key={plan.id}>Status: {plan.status}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No plans found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default PlanSearchScreen;
