import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Reservations from "./components/Reservations";

const App = () => {
  return (
    <div>
    <Router>
      <Header />

       <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/reservations" element={<Reservations />} />
       </Routes>

      <Footer />
    </Router>
    </div>
  );
};

export default App;