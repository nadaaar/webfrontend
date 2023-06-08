import React, { useEffect, useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const ReviewList = () => {
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(`https://asliprojectt.onrender.com/user/viewAllReviews`);
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error(error);
        setError('Failed to get reviews');
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
        <Header />
        <Nav />
        <div>
        <h4>Search Results:</h4>
        {reviews.length > 0 ? (
          <ul>
            {reviews.map((reviews) => (
              <li key={reviews.id}>User Name: {reviews.user.name}
                <ul key={reviews.id}>Type: {reviews.reviewType}</ul>
                <ul key={reviews.id}>Review Type Name Specification: {reviews.reviewId.name}</ul> 
                <ul key={reviews.id}>Comment: {reviews.comment}</ul>
              
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews found</p>
        )}
      </div>
        <Footer />
    </div>
  );
};

export default ReviewList;