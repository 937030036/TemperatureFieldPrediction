import React from 'react';
import '../styles/BarChart.css';

const BarChart = ({ position, BarData }:
  { position: 'top' | 'bottom' | 'left' | 'right', BarData: any }) => {
  // Generate random bar data
  const generateBars = (BarData: any[]) => {
    // const count = position === 'left' || position === 'right' ? 58 : 60;
    return Array.from(BarData, data => ({
      height: data,
      color: data > 450 ? '#ffcc00' : '#00cc66'
    }));
  };

  const bars = generateBars(BarData);

  return (
    <div className={`bar-container ${position}`}>
      {bars.map((bar, index) => (
        <div
          key={index}
          className="bar"
          data-value={`${bar.height.toFixed(2)}℃`}
          style={{
            height: position === 'top' || position === 'bottom' ? `${(bar.height - 200) / 3}%` : '100%',
            width: position === 'left' || position === 'right' ? `${(bar.height - 200) / 3}%` : '100%',
            backgroundColor: bar.color
          }}
        />
      ))}
    </div>
  );
};

export default BarChart;