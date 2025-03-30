import { useNavigate } from 'react-router-dom';

import AppBar from '@mui/material/Appbar'
import Toolbar from '@mui/material/Toolbar'
// import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';

import atlas from '../assets/techatlas.png'

const logoStyle = {
  // width: '50px',
  height: '50px',
  margin: '0 0px',
  opacity: 1.0,
};



function Header() {
  const navigate = useNavigate();

  function handleHome() {
    navigate('/')
  }

  return (
      <Container>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: '' }}>
          <Toolbar>
          <Link 
            // href="/"
            component="button"
            onClick={handleHome}
          >
            <img
              src={atlas}
              style={logoStyle}
            />
          </Link>
            {/* <Typography variant="h4" >
              Atlas Solutions
            </Typography> */}
          </Toolbar>
        </AppBar>
      </Container>
  );
}

export default Header;