import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Box } from '@mui/material';
import TopNav from './components/TopNav.jsx';
import Footer from './components/Footer.jsx';

import HomePage from './pages/HomePage.jsx';
import ToolMapPage from './pages/ToolMapPage.jsx';
import AgentsPage from './pages/AgentsPage.jsx';
import CasesPage from './pages/CasesPage.jsx';
import AcademyPage from './pages/AcademyPage.jsx';
import GovernancePage from './pages/GovernancePage.jsx';
import CommunityPage from './pages/CommunityPage.jsx';

export default function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <TopNav />
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/toolmap" element={<ToolMapPage />} />
          <Route path="/agents" element={<AgentsPage />} />
          <Route path="/cases" element={<CasesPage />} />
          <Route path="/academy" element={<AcademyPage />} />
          <Route path="/governance" element={<GovernancePage />} />
          <Route path="/community" element={<CommunityPage />} />
        </Routes>
      </Box>
      <Footer />
    </Box>
  );
}
