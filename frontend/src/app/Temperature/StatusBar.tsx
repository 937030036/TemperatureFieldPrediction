import React from 'react';
import '../styles/StatusBar.css';

function StatusBar({ lastUpdated }: { lastUpdated: any }) {
  return (
    <div className="StatusBarContainer">
      <div className="LeftSection">
        <div className="Title">锅炉监测45米温度场（每5秒刷新）</div>
        {/* <span>上次更新时间：{lastUpdated}</span> */}
      </div>
      <div className="RightSection">
        <button className='Button active'>实时</button>
        <button className='Button'>统计</button>
        <button className='Button'>超温概览</button>
        <button className='Button'>速率和限值</button>
      </div>
    </div >
  );
}

export default StatusBar;