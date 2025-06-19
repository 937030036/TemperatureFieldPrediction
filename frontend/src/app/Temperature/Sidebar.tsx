import React from 'react';
import styled from 'styled-components';

const SidebarContainer = styled.div`
  width: 120px;
  background-color: #0a1929;
  border-right: 1px solid #1a3b66;
  padding: 10px 0;
`;

const MenuItem = styled.div`
  padding: 10px;
  margin: 5px 0;
  text-align: center;
  background-color: ${props => props.active ? '#1e90ff' : 'transparent'};
  border-radius: 4px;
  cursor: pointer;
  
  &:hover {
    background-color: ${props => props.active ? '#1e90ff' : '#1a3b66'};
  }
`;

function Sidebar() {
  return (
    <SidebarContainer>
      <MenuItem active='true'>主视图</MenuItem>
      <MenuItem>变化率图</MenuItem>
      <MenuItem>水冷壁均值</MenuItem>
      <MenuItem>水冷壁西侧</MenuItem>
      <MenuItem>水冷壁左侧</MenuItem>
      <MenuItem>水冷壁右侧</MenuItem>
    </SidebarContainer>

  );
}

export default Sidebar;