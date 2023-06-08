import React, { useEffect, useState } from 'react';
import Nav from '../../components/Navbar/userNav';
import Header from '../../components/Header';
import Footer from '../../components/Footer/userFooter';


const PlanList = () => {
  const [plans, setPlans] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch(`https://asliprojectt.onrender.com/user/viewAllPlans`);
        const data = await response.json();
        setPlans(data.plans);
      } catch (error) {
        console.error(error);
        setError('Failed to get plans');
      }
    };

    fetchPlans();
  }, []);

  return (
    <div>
        <Header />
        <Nav />
      <h3>Plan List</h3>
      {error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {plans.map((plan) => (
            <li key={plan._id}>
              <p>User: {plan.user.name}</p>
              <p>Accommodations: {plan.accommodations.length}</p>
              <p>Transportations: {plan.transportations.length}</p>
              <p>Activities: {plan.activities.length}</p>
              <ul key={plan.id}>Total Price: {plan.totalPrice}</ul>
            <ul key={plan.id}>Status: {plan.status}</ul>
            </li>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
};

export default PlanList;