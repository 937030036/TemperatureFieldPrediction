"use client";
import Header from './Temperature/Header';
import Sidebar from './Temperature/Sidebar';
import StatusBar from './Temperature/StatusBar';
import MainDisplay from './Temperature/MainDisplay';
import RightPanel from './Temperature/RightPanel';
import './globals.css';


export default async function Home() {
  return (
    <div className="AppContainer">
      <Header />
      <div className="MainContent">
        <Sidebar />
        <div className="ContentArea">
          <StatusBar lastUpdated={new Date().toLocaleString()} />
          <MainDisplay />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
