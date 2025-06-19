import React from 'react';
import styled from 'styled-components';

const StatusBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #0a1929;
  padding: 10px 0;
  border-bottom: 1px solid #1a3b66;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-size: 1.1em;
  margin-right: 20px;
`;

const RightSection = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${props => props.active ? '#1e90ff' : '#1a3b66'};
  color: white;
  border: none;
  padding: 5px 15px;
  border-radius: 4px;
  cursor: pointer;
`;

function StatusBar({ lastUpdated }: { lastUpdated: any }) {
  return (
    <StatusBarContainer>
      <LeftSection>
        <Title>锅炉监测</Title>
        {/* <span>上次更新时间：{lastUpdated}</span> */}
      </LeftSection>
      <RightSection>
        <Button active='true'>实时</Button>
        <Button>统计</Button>
        <Button>超温概览</Button>
        <Button>速率和限值</Button>
      </RightSection>
    </StatusBarContainer >
  );
}

export default StatusBar;