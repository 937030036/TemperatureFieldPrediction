import React from 'react';
import TemperatureGrid from './TemperatureDisplay';
import '../styles/MainDisplay.css';


function MainDisplay() {
  return (
    <div className="MainDisplayContainer">

      <div className="BarContainer">
        <TemperatureGrid />

      </div>

    </div>
  );
}

export default MainDisplay;