import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import Header from './components/Header';
import Home from './components/Home';
import SecTraining from './components/SecTraining'
import DmarcBuilder from './components/Dmarc'
import Account from './components/Account'
import Assets from './components/Assets'
import HelpTickets from './components/HelpTickets'
import DmarcReport from './components/DmarcReport'
import Announcements from './components/Announcements'
import Dashboard from './components/Dashboard'

function App() {

  return (
    <BrowserRouter >
      <Container maxWidth="lg">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security-training" element={<SecTraining />} />
          <Route path="/dmarc" element={<DmarcBuilder />} />
          <Route path="/dmarc-reports" element={<DmarcReport />} />
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
