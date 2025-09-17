import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const ConfirmedReservation = () => {
  return (
    <section className="confirmation-section">
      <div className="confirmation-container">
        <h2 className="confirmation-title">Reservation Confirmed!</h2>
        <p className="confirmation-message">
          Thank you for your reservation. We look forward to seeing you!
        </p>
        <Link to="/" className="back-home-button">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default ConfirmedReservation;