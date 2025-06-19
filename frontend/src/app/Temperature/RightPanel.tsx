import React from 'react';
import styled from 'styled-components';
import StatusIndicator from './StatusIndicator';

const PanelContainer = styled.div`
  width: 200px;
  background-color: #0a1929;
  border-left: 1px solid #1a3b66;
  padding: 15px;
`;

const PanelSection = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 1em;
  margin-bottom: 10px;
  color: #1e90ff;
`;

function RightPanel() {
  return (
    <PanelContainer>
      <PanelSection>
        <SectionTitle>系统状态</SectionTitle>
        <StatusIndicator color="#00ff00" label="温度正常" value="xx" unit="%" />
        <StatusIndicator color="#1e90ff" label="系统运行" value="xx" unit="h" />
      </PanelSection>

      <PanelSection>
        <SectionTitle>告警信息</SectionTitle>
        <StatusIndicator color="#ffa500" label="低级警告" value="xx" unit="" />
        <StatusIndicator color="#ff0000" label="高级警告" value="xx" unit="" />
      </PanelSection>

      <PanelSection>
        <SectionTitle>数据统计</SectionTitle>
        <StatusIndicator color="#1e90ff" label="平均温度" value="xx" unit="°C" />
        <StatusIndicator color="#00ff00" label="最低温度" value="xx" unit="°C" />
        <StatusIndicator color="#ff00ff" label="最高温度" value="xx" unit="°C" />
      </PanelSection>
    </PanelContainer>
  );
}

export default RightPanel;