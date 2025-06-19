import React from 'react';
import './TemperatureGrid.css';

const TemperatureGrid = ({ data }: { data: string[][] }) => {
  console.log('TemperatureGrid data:', data);
  return (
    <div className="temperature-grid">
      {data.map((row, rowIndex) => (
        <div key={rowIndex} className="grid-row">
          {row.map((temp, colIndex) => (
            <div key={colIndex} className="grid-cell">
              <div className="temp-badge">{temp}℃</div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TemperatureGrid;