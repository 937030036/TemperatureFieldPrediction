import './TemperatureDisplay.css';
import TemperatureGrid from './TemperatureGrid';
import BarChart from './BarChart';
import { useEffect, useState } from 'react';
import { getGridData } from '../api/grid';

const TemperatureDisplay = () => {
  // Temperature data for the corners
  const cornerTemps = {
    topLeft: '386.22°C',
    topRight: '376.43°C',
    bottomLeft: '375.94°C',
    bottomRight: '377.16°C'
  };

  // Grid temperature data
  const [gridData, setGridData] = useState<string[][]>([
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-']
  ]);
  useEffect(() => {
    getData();
    setInterval(getData, 5000);
  }, []);


  async function getData() {
    try {
      const response = await getGridData();
      console.log("111", response);
      const gridData = await response.data;
      console.log('Grid Data:', gridData);
      setGridData(gridData);
    } catch (error) {
      console.error('Failed to fetch grid data:', error);
    }

  };

  return (
    <div className="temperature-display">
      {/* Top bar chart */}
      <div className="bar-chart top">
        <div className="corner-temp top-left">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.topLeft}</div>
        </div>
        <BarChart position="top" />
        <div className="corner-temp top-right">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.topRight}</div>
        </div>
      </div>

      {/* Middle section with side bars and grid */}
      <div className="middle-section">
        <BarChart position="left" />
        <TemperatureGrid data={gridData} />
        <BarChart position="right" />
      </div>

      {/* Bottom bar chart */}
      <div className="bar-chart bottom">
        <div className="corner-temp bottom-left">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.bottomLeft}</div>
        </div>
        <BarChart position="bottom" />
        <div className="corner-temp bottom-right">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.bottomRight}</div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDisplay;