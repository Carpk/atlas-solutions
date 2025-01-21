import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';

import Header from './components/Header';
import Home from './components/Home';
import SecTraining from './components/SecTraining'
import Dmarc from './components/Dmarc'

function App() {

  return (
    <BrowserRouter >
      <Container maxWidth="lg">
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/security-training" element={<SecTraining />} />
          {/* <Route path="/questions" element={<Questions />} /> */}
          <Route path="/dmarc" element={<Dmarc />} /> 
        </Routes>
      </Container>
    </BrowserRouter>
  )
}

export default App
