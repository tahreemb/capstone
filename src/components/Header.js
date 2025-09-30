import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/'},
    { name: 'Menu', path: '/'},
    { name: 'Reservations', path: '/reservations'},
    { name: 'Order Online', path: '/'},
    { name: 'Login', path: '/'},
  ];

  return (
    <header className="main-header">
      <nav className="nav-bar container">
      <div className="logo">
        <img src="/assets/logo-header.png" alt="Logo" className="header-logo" />
      </div>

      {/* Hamburger Icon */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        <ul className={`nav-list ${menuOpen ? 'show-menu' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name} className="nav-item">
              <Link
                to={item.path}
                className="nav-link"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

