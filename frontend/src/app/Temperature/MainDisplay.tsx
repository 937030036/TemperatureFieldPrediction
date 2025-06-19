import React from 'react';
import styled from 'styled-components';
import TemperatureGrid from './TemperatureDisplay';

const MainDisplayContainer = styled.div`
  flex: 1;
  background-color: #0f2543;
  border-radius: 4px;
  margin: 10px 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const BarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const TopBarSection = styled.div`
  height: 30%;
  display: flex;
`;

const MiddleSection = styled.div`
  flex: 1;
  display: flex;
  position: relative;
`;

const BottomBarSection = styled.div`
  height: 30%;
  display: flex;
`;

// const SideInfo = styled.div`
//   position: absolute;
//   color: white;
//   font-size: 0.8em;
//   ${props => props.position}: 10px;
//   bottom: ${props => props.bottom || 'auto'};
//   top: ${props => props.top || 'auto'};
// `;

function MainDisplay() {
  return (
    <MainDisplayContainer>

      <BarContainer>
        <TemperatureGrid />

      </BarContainer>

    </MainDisplayContainer>
  );
}

export default MainDisplay;