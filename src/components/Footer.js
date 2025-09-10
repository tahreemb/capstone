import React from 'react';
import '../App.css';
//import logo from './logo.png';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content container">

        <div className="footer-logo">
          <img src="" alt="Logo" />
        </div>

        <div className="footer-columns">
          <div className="footer-column">
            <h4>Doormat Navigation</h4>
            <p>Home</p>
            <p>About</p>
            <p>Menu</p>
            <p>Reservations</p>
            <p>Order Online</p>
            <p>Login</p>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>

          <div className="footer-column">
            <h4>Social Media Links</h4>
            <p>Facebook</p>
            <p>Instagram</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
