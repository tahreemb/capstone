import React, { useReducer, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Reservations = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: '',
    occasion: 'Birthday',
  });

const initializeTimes = () => {
  return [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return action.payload;
    default:
      return state;
  }
};

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );

  const [bookedSlots, setBookedSlots] = useState(() => {
    const storedBookings = localStorage.getItem('bookedSlots');
    return storedBookings ? JSON.parse(storedBookings) : [];
  });

  useEffect(() => {
    localStorage.setItem('bookedSlots', JSON.stringify(bookedSlots));
  }, [bookedSlots]);

  const initialTimes = initializeTimes();

  const fetchedTimes = (date) => {
    const bookedTimes = bookedSlots
      .filter((slot) => slot.date === date)
      .map((slot) => slot.time);

    const filteredTimes = initialTimes.filter(
      (time) => !bookedTimes.includes(time)
    );

    dispatch({ type: 'UPDATE_TIMES', payload: filteredTimes });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'date') {
      fetchedTimes(value);
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { date, time } = formData;

    const alreadyBooked = bookedSlots.some(
      (slot) => slot.date === date && slot.time === time
    );

    if (alreadyBooked) {
      alert('This time is already booked!');
      return;
    }

    setBookedSlots((prev) => [...prev, { date, time }]);
    fetchedTimes(date);
    navigate('/confirmed');

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
            aria-label="Select reservation time"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <label htmlFor="time">Time:</label>
          <select
            id="time"
            name="time"
            aria-label="Select reservation time"
            value={formData.time}
            onChange={handleChange}
            required
          >
          <option value="">Select a time</option>
            {initialTimes.map((time) => (
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
            aria-label="Number of guests"
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
            aria-label="Select occasion"
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
