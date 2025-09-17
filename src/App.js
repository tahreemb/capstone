import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Reservations from "./components/Reservations";
import ConfirmedReservation from "./components/ConfirmedReservation";

const App = () => {
  return (
    <div>
    <Router>
      <Header />

       <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/confirmed" element={<ConfirmedReservation />} />
       </Routes>

      <Footer />
    </Router>
    </div>
  );
};

export default App;