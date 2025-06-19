"use client";
import styled from 'styled-components';
import Header from './Temperature/Header';
import Sidebar from './Temperature/Sidebar';
import StatusBar from './Temperature/StatusBar';
import MainDisplay from './Temperature/MainDisplay';
import RightPanel from './Temperature/RightPanel';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #0a1929;
  color: white;
`;
const MainContent = styled.div`
  display: flex;
  flex: 1;
`;

const ContentArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`;
export default async function Home() {
  return (
    <AppContainer>
      <Header />
      <MainContent>
        <Sidebar />
        <ContentArea>
          <StatusBar lastUpdated={new Date().toLocaleString()} />
          <MainDisplay />
        </ContentArea>
        <RightPanel />
      </MainContent>
    </AppContainer>
  );
}
