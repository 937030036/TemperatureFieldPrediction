import React from 'react';
import styled from 'styled-components';
import { HomeFilled } from '@ant-design/icons';
import { Button } from "antd";
import Link from "next/link";

const HeaderContainer = styled.header`
  display: flex;
  background-color: #0a1929;
  border-bottom: 1px solid #1a3b66;
  padding: 10px 20px;
  align-items: center;
  height: 60px;
`;

const HeaderItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 15px;
  border-right: 1px solid #1a3b66;
  height: 100%;
  
  &:last-child {
    border-right: none;
  }
`;

const Label = styled.span`
  margin-right: 5px;
  color: ${props => props.color || 'white'};
`;

const Value = styled.span`
  font-weight: bold;
  font-size: 1.2em;
  color: ${props => props.color || 'white'};
`;

const Icon = styled.span`
  margin-right: 10px;
  color: ${props => props.color || 'white'};
`;

function Header() {
  return (
    <HeaderContainer>
      <Link href='/config'>
        {/* <Button type='link' icon={<HomeFilled />} ghost style={{ color: 'white' }} /> */}
        <Icon style={{ color: 'white', fontSize: '24px' }}><HomeFilled /></Icon>
      </Link>
      <HeaderItem>
        <Icon style={{ color: '#1e90ff' }}>|</Icon>
        <Label style={{ color: '#1e90ff' }}>锅炉负荷</Label>
        <Value style={{ color: '#1e90ff' }}>XX MW</Value>
      </HeaderItem>
      <HeaderItem>
        <Icon style={{ color: '#00ff00' }}>|</Icon>
        <Label style={{ color: '#00ff00' }}>主汽压力</Label>
        <Value style={{ color: '#00ff00' }}>XX MPa</Value>
      </HeaderItem>
      <HeaderItem>
        <Icon style={{ color: '#ffa500' }}>|</Icon>
        <Label style={{ color: '#ffa500' }}>给水温度</Label>
        <Value style={{ color: '#ffa500' }}>XX °C</Value>
      </HeaderItem>
      <HeaderItem>
        <Icon style={{ color: '#ff00ff' }}>|</Icon>
        <Label style={{ color: '#ff00ff' }}>主汽温度</Label>
        <Value style={{ color: '#ff00ff' }}>XX °C</Value>
      </HeaderItem>
      <HeaderItem>
        <Icon style={{ color: '#ffa500' }}>|</Icon>
        <Label style={{ color: '#ffa500' }}>再热温度</Label>
        <Value style={{ color: '#ffa500' }}>XX °C</Value>
      </HeaderItem>
      <HeaderItem>
        <Icon style={{ color: '#ff0000' }}>|</Icon>
        <Label style={{ color: '#ff0000' }}>MKP-超温测点</Label>
        <Value style={{ color: '#ff0000' }}>xx 个</Value>
      </HeaderItem>
      <HeaderItem>
        <Icon style={{ color: '#1e90ff' }}>|</Icon>
        <Label style={{ color: '#1e90ff' }}>MKP-最高温度</Label>
        <Value style={{ color: '#1e90ff' }}>XX °C</Value>
      </HeaderItem>
    </HeaderContainer>
  );
}

export default Header;