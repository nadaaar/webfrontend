import React, { useEffect, useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const AccommodationList = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchAccommodations = async () => {
      try {
        const response = await fetch(`https://asliprojectt.onrender.com/user/viewAllAccommodations`);
        const data = await response.json();
        setAccommodations(data.accommodations);
      } catch (error) {
        console.error(error);
        setError('Failed to get accommodations');
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <div>

        <Header />
        <Nav />
      <h3>Accommodation List</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {accommodations.map((accommodation) => (
            <li key={accommodation._id}>
              <h4>{accommodation.name}</h4>
              <h3>{accommodation.description}</h3>
              <h3>{accommodation.address}</h3>
              <h3>{accommodation.price}</h3>
              <p>Location: {accommodation.location.name}</p>
              <p>Amenities: {accommodation.amenities.length}</p>
              <p>{accommodation.amenities}</p>
              <p>Reviews: {accommodation.reviews.length}</p>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default AccommodationList;
