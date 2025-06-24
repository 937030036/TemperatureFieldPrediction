import React from 'react';
import StatusIndicator from './StatusIndicator';
import '../styles/RightPanel.css';

function RightPanel() {
  return (
    <div className="PanelContainer">
      <div className="PanelSection">
        <h3 className="SectionTitle">系统状态</h3>
        <StatusIndicator color="#00ff00" label="温度正常" value="xx" unit="%" />
        <StatusIndicator color="#1e90ff" label="系统运行" value="xx" unit="h" />
      </div>

      <div className="PanelSection">
        <h3 className="SectionTitle">告警信息</h3>
        <StatusIndicator color="#ffa500" label="低级警告" value="xx" unit="" />
        <StatusIndicator color="#ff0000" label="高级警告" value="xx" unit="" />
      </div>

      <div className="PanelSection">
        <h3 className="SectionTitle">数据统计</h3>
        <StatusIndicator color="#1e90ff" label="平均温度" value="xx" unit="°C" />
        <StatusIndicator color="#00ff00" label="最低温度" value="xx" unit="°C" />
        <StatusIndicator color="#ff00ff" label="最高温度" value="xx" unit="°C" />
      </div>
    </div>
  );
}

export default RightPanel;