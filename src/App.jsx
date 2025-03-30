import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import Header from './components/Header';
import Home from './pages/Home';
import SecTraining from './pages/SecTraining'
import DmarcBuilder from './pages/DmarcBuilder'
import Account from './pages/Account'
import Assets from './pages/Assets'
import HelpTickets from './pages/HelpTickets'
import DmarcReport from './pages/DmarcReport'
import DmarcCheck from './pages/DmarcCheck'
import Announcements from './pages/Announcements'
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <BrowserRouter >
      <Container maxWidth="lg">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security-training" element={<SecTraining />} />
          <Route path="/dmarc-builder" element={<DmarcBuilder />} />
          <Route path="/dmarc-reports" element={<DmarcReport />} />
          <Route path="/dmarc-check" element={<DmarcCheck />} />
          <Route path="/assets" element={<Assets />} />
          <Route path="/account" element={<Account />} /> 
          <Route path="/help-tickets" element={<HelpTickets />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
