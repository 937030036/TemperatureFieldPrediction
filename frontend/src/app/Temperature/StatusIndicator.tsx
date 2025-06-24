import React from 'react';
import '../styles/StatusIndicator.css';

function StatusIndicator({ color, label, value, unit }: { color: string; label: string; value: string; unit: string; }) {
  return (
    <div className="IndicatorContainer">
      <div className="IndicatorDot" style={{ backgroundColor: color }} />
      <span className="IndicatorLabel">{label}</span>
      <span className="IndicatorValue" style={{ color }}>{value}{unit}</span>
    </div>
  );
}

export default StatusIndicator;