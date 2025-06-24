import React from 'react';
import { HomeFilled } from '@ant-design/icons';
import Link from "next/link";
import '../styles/Header.css';

function Header() {
  return (
    <header className='HeaderContainer'>
      <Link href='/config'>
        {/* <Button type='link' icon={<HomeFilled />} ghost style={{ color: 'white' }} /> */}
        <div className="Icon" style={{ color: 'white', fontSize: '24px' }}><HomeFilled /></div>
      </Link>
      <div className="HeaderItem">
        <span className="Icon" style={{ color: '#1e90ff' }}>|</span>
        <span className="Label" style={{ color: '#1e90ff' }}>锅炉负荷</span>
        <span className='Value' style={{ color: '#1e90ff' }}>XX MW</span>
      </div>
      <div className="HeaderItem">
        <span className="Icon" style={{ color: '#00ff00' }}>|</span>
        <span className="Label" style={{ color: '#00ff00' }}>主汽压力</span>
        <span className='Value' style={{ color: '#00ff00' }}>XX MPa</span>
      </div>
      <div className="HeaderItem">
        <span className="Icon" style={{ color: '#ffa500' }}>|</span>
        <span className="Label" style={{ color: '#ffa500' }}>给水温度</span>
        <span className='Value' style={{ color: '#ffa500' }}>XX °C</span>
      </div>
      <div className="HeaderItem" >
        <span className="Icon" style={{ color: '#ff00ff' }}>|</span>
        <span className="Label" style={{ color: '#ff00ff' }}>主汽温度</span>
        <span className='Value' style={{ color: '#ff00ff' }}>XX °C</span>
      </div>
      <div className="HeaderItem">
        <span className="Icon" style={{ color: '#ffa500' }}>|</span>
        <span className="Label" style={{ color: '#ffa500' }}>再热温度</span>
        <span className='Value' style={{ color: '#ffa500' }}>XX °C</span>
      </div>
      <div className="HeaderItem">
        <span className="Icon" style={{ color: '#ff0000' }}>|</span>
        <span className="Label" style={{ color: '#ff0000' }}>MKP-超温测点</span>
        <span className='Value' style={{ color: '#ff0000' }}>xx 个</span>
      </div>
      <div className="HeaderItem">
        <span className="Icon" style={{ color: '#1e90ff' }}>|</span>
        <span className="Label" style={{ color: '#1e90ff' }}>MKP-最高温度</span>
        <span className='Value' style={{ color: '#1e90ff' }}>XX °C</span>
      </div>
    </header>
  );
}

export default Header;