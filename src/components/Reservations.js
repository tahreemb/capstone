import React, { useReducer, useState } from 'react';
import '../App.css';

const initializeTimes = () => {
  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      const selectedDate = action.payload;
      // Example logic to change times based on date
      if (selectedDate === '2025-12-25') {
        return ['17:00', '18:00'];
      }
      // default set
      return initializeTimes();
    default:
      return state;
  }
};

const Reservations = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: 'Birthday',
  });

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );


  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      updateTimes(value);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Reservation Submitted:', formData);
    alert('Reservation submitted!');
  };

  return (
    <section className="reservation-section">
      <h2 className="reservation-title">Reserve a Table</h2>
      <div className="reservation-container">
        <form className="reservation-form" onSubmit={handleSubmit}>
          <label htmlFor="date">Date:</label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
          >
            {availableTimes.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
          ))}
          </select>

          <label htmlFor="guests">Number of Guests:</label>
          <input
            type="number"
            id="guests"
            name="guests"
            min="1"
            max="10"
            value={formData.guests}
            onChange={handleChange}
            required
          />

          <label htmlFor="occasion">Occasion:</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
            <option value="Other">Other</option>
          </select>

          <button type="submit" className="reservation-button">
            Submit Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservations;
