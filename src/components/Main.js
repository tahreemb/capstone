import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Main = () => {
  return (
    <main className="main-content">
      {/* Section 1 */}
      <section className="section landing-section">
        <div className="landing-content">
            {/* Left Side: Text & Button */}
            <div className="landing-text">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p>
                We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations">
              <button className="landing-button">Reserve a Table</button>
            </Link>
            </div>

            {/* Right Side: Image */}
            <div className="landing-image">
            <img
                src=""
                alt="Landing Visual"
            />
            </div>
        </div>
      </section>


      {/* Section 2: Cards */}
      <section className="section cards-section">
        <div className="section-header">
            <h2>This week's specials!</h2>
            <button className="section-button">Online Menu</button>
        </div>
        <div className="card-container">
          <div className="card">
            <img src="" alt="Card 1" className="card-img" />
            <div className="card-header">
                <h3>Greek salad</h3>
                <span className="card-extra">$12.99</span>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. </p>
          </div>
          <div className="card">
            <img src="" alt="Card 2" className="card-img" />
            <div className="card-header">
                <h3>Bruschetta</h3>
                <span className="card-extra">$5.99</span>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. </p>
          </div>
          <div className="card">
            <img src="" alt="Card 3" className="card-img" />
            <div className="card-header">
                <h3>Lemon Dessert</h3>
                <span className="card-extra">$5.00</span>
            </div>
            <p>This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;
