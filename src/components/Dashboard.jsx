import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import MainContent from './MainContent';
import TeamMembersPage from './TeamMembersPage';

const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'team-members':
        return <TeamMembersPage />;
      case 'home':
      default:
        return <MainContent />;
    }
  };

  return (
    <div className="h-screen flex flex-col" style={{ backgroundColor: '#f0f2f5' }}>
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar currentPage={currentPage} setCurrentPage={setCurrentPage} />
        {renderContent()}
      </div>
    </div>
  );
};

export default Dashboard; 