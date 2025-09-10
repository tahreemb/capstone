import React, { useState } from 'react';
import '../App.css';

const Header = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const categories = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

  return (
    <header className="main-header">
      <nav className="nav-bar container">
      <div className="logo">
        <img src="" alt="Logo" className="logo-img" />
      </div>
        <ul className="nav-list">
          {categories.map((category, index) => (
            <li key={category} className="nav-item">
              <a
                href="#"
                className={`nav-link ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
              >
                {category}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

