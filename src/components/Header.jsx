import AppBar from '@mui/material/Appbar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import atlas from '../assets/techatlas.png'

const logoStyle = {
  // width: '50px',
  height: '50px',
  margin: '0 0px',
  opacity: 1.0,
};

function Header() {

  return (
      <Container>
        <CssBaseline />
        <AppBar sx={{ backgroundColor: '' }}>
          <Toolbar>
          <img
              src={atlas}
              style={logoStyle}
            />
            <Typography variant="h4" >
              Atlas Solutions
            </Typography>
          </Toolbar>
        </AppBar>
      </Container>
  );
}

export default Header;