import React from 'react';
import './App.css';
import HomeScreen from './layouts/HomeScreen';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import LoginScreen from './layouts/LoginScreen';
import LandingScreen from './layouts/LandingScreen';

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/landing' element={<LandingScreen />} />
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />
          

        </Routes>


      </Router>
    </div>
  );
}

export default App;
