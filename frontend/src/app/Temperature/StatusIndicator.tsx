import React from 'react';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`;

const IndicatorDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin-right: 5px;
`;

const IndicatorLabel = styled.span`
  font-size: 0.9em;
`;

const IndicatorValue = styled.span`
  font-weight: bold;
  margin-left: 5px;
  color: ${props => props.color || 'white'};
`;

function StatusIndicator({ color, label, value, unit }) {
  return (
    <IndicatorContainer>
      <IndicatorDot color={color} />
      <IndicatorLabel>{label}</IndicatorLabel>
      <IndicatorValue color={color}>{value}{unit}</IndicatorValue>
    </IndicatorContainer>
  );
}

export default StatusIndicator;