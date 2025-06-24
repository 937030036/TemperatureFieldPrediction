import React, { useState } from 'react';
import '../styles/BarChart.css';

const BarChart = ({ position }: { position: 'top' | 'bottom' | 'left' | 'right' }) => {
  // Generate random bar data
  const generateBars = () => {
    const count = position === 'left' || position === 'right' ? 70 : 70;
    return Array.from({ length: count }, () => ({
      height: Math.random() * 80 + 20,
      color: Math.random() > 0.5 ? '#ffcc00' : '#00cc66'
    }));
  };

  const bars = generateBars();
  return (
    <div className={`bar-container ${position}`}>
      {bars.map((bar, index) => (
        <div
          key={index}
          className="bar"
          data-value={`${bar.height.toFixed(2)}℃`}
          style={{
            height: position === 'top' || position === 'bottom' ? `${bar.height}%` : '100%',
            width: position === 'left' || position === 'right' ? `${bar.height}%` : '100%',
            backgroundColor: bar.color
          }}
        />
      ))}
    </div>
  );
};

export default BarChart;