import '../styles/TemperatureDisplay.css';
import TemperatureGrid from './TemperatureGrid';
import BarChart from './BarChart';
import { useEffect, useState } from 'react';
import { getGridData } from '../api/grid';

const TemperatureDisplay = () => {
  // Temperature data for the corners
  const cornerTempsTmp = {
    topLeft: '386.22°C',
    topRight: '376.43°C',
    bottomLeft: '375.94°C',
    bottomRight: '377.16°C'
  };

  var BarDataTmp = {
    top: [],
    bottom: [],
    left: [],
    right: []
  }

  // Grid temperature data
  const [gridData, setGridData] = useState<string[][]>([
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-'],
    ['-', '-', '-', '-']
  ]);
  const [BarData, setBarData] = useState({ top: [], bottom: [], left: [], right: [] });
  const [cornerTemps, setcornerTemps] = useState({
    topLeft: "0.00",
    topRight: "0.00",
    bottomLeft: "0.00",
    bottomRight: "0.00"
  });
  useEffect(() => {
    getData();
    setInterval(getData, 5000);
  }, []);


  async function getData() {
    try {
      const response: any = await getGridData();
      const res = await response;
      const gridData = res.resdata;
      BarDataTmp.top = res.front;
      BarDataTmp.bottom = res.back;
      BarDataTmp.left = res.left;
      BarDataTmp.right = res.right;
      setBarData(BarDataTmp);
      setGridData(gridData);
      setcornerTemps({
        topLeft: (BarDataTmp.top.reduce((sum, current) => sum + current, 0) / BarDataTmp.top.length).toFixed(2),
        topRight: (BarDataTmp.right.reduce((sum, current) => sum + current, 0) / BarDataTmp.right.length).toFixed(2),
        bottomLeft: (BarDataTmp.left.reduce((sum, current) => sum + current, 0) / BarDataTmp.left.length).toFixed(2),
        bottomRight: (BarDataTmp.bottom.reduce((sum, current) => sum + current, 0) / BarDataTmp.bottom.length).toFixed(2)
      });
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
          <div>平均温度: {cornerTemps.topLeft}℃</div>
        </div>
        <BarChart position="top" BarData={BarData.top} />
        <div className="corner-temp top-right">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.topRight}℃</div>
        </div>
      </div>

      {/* Middle section with side bars and grid */}
      <div className="middle-section">
        <BarChart position="left" BarData={BarData.left} />
        <TemperatureGrid data={gridData} />
        <BarChart position="right" BarData={BarData.right} />
      </div>

      {/* Bottom bar chart */}
      <div className="bar-chart bottom">
        <div className="corner-temp bottom-left">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.bottomLeft}℃</div>
        </div>
        <BarChart position="bottom" BarData={BarData.bottom} />
        <div className="corner-temp bottom-right">
          <div>水冷壁右墙</div>
          <div>平均温度: {cornerTemps.bottomRight}℃</div>
        </div>
      </div>
    </div>
  );
};

export default TemperatureDisplay;