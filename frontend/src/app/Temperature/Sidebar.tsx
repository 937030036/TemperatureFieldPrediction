import React from 'react';
import '../styles/Sidebar.css';


function Sidebar() {
  return (
    <div className="SidebarContainer">
      <div className="MenuItem active">主视图</div>
      <div className="MenuItem">变化率图</div>
      <div className="MenuItem">水冷壁均值</div>
      <div className="MenuItem">水冷壁西侧</div>
      <div className="MenuItem">水冷壁左侧</div>
      <div className="MenuItem">水冷壁右侧</div>
    </div>

  );
}

export default Sidebar;