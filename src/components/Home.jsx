import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SignInCard from './SignInCard';


function Home() {
  const navigate = useNavigate();
  
  function handleSecTraining() {
    navigate('/security-training');
  }

  function handleDmarcBuilder() {
    navigate('/dmarc-builder');
  }


  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      sx={{
        justifyContent: 'center',
        height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
        marginTop: 'max(150px - var(--template-frame-height, 0px), 0px)',
        minHeight: '100%',
        gap: { xs: 6, sm: 12 },
        p: 2,
        mx: 'auto',
      }}
    >
      <Stack
        // direction={{ xs: 'column-reverse', md: 'row' }}
        sx={{
          justifyContent: 'center',
          gap: { xs: 4, sm: 8 },
          p: { xs: 2, sm: 4 },
          m: 'auto',
        }}
      >
        <Card sx={{ alignItems: 'center', maxWidth: 425 }} >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Security Awareness Training
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              We offer free user awareness training for any organization 
              looking to coach thier employees on better security practices.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={[
                {
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },
                  alignItems: 'end',
                  flexGrow: 1,
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                  mb: '12px',
                  justifyContent: 'flex-end' 
                },
              ]}
              >
              <Button 
                variant="contained"
                onClick={handleSecTraining} 
                size="small"  
                color="primary"
                sx={{ width: { xs: '100%', sm: 'fit-content' }, mr: 3 }}
              >
                Start
              </Button>
            </Box>
          </CardActions>
        </Card>
        <Card sx={{ alignItems: 'center', maxWidth: 425 }} >
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              DMAR Builder Tool
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Free tool to build your DMARC record.
            </Typography>
          </CardContent>
          <CardActions>
            <Box
              sx={[
                {
                  display: 'flex',
                  flexDirection: { xs: 'column-reverse', sm: 'row' },
                  alignItems: 'end',
                  flexGrow: 1,
                  gap: 1,
                  pb: { xs: 12, sm: 0 },
                  mt: { xs: 2, sm: 0 },
                  mb: '12px',
                  justifyContent: 'flex-end' 
                },
              ]}
              >
              <Button 
                variant="contained"
                onClick={ handleDmarcBuilder } 
                size="small"  
                color="primary"
                sx={{ width: { xs: '100%', sm: 'fit-content' }, mr: 3 }}
              >
                Start
              </Button>
            </Box>
          </CardActions>
        </Card>
        </Stack>
        <SignInCard />
      
    </Stack>
  );
}

export default Home;




      // <Container
      //   maxWidth="lg"
      //   component="main"
      //   sx={{ display: 'flex', flexDirection: 'row', my: 16, gap: 4 }}
      // >
      //   <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
      //     <CardContent>
      //       <Typography gutterBottom variant="h5" component="div">
      //         Security Awareness Training
      //       </Typography>
      //       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      //         You will be prompted with some brief text, followed by a question.
      //       </Typography>
      //     </CardContent>
      //     <CardActions>
      //       <Button onClick={handleSecTraining} size="small"  color="primary" align="right">
      //         Start
      //       </Button>
      //     </CardActions>
      //   </Card>
      //   <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
      //     <CardContent>
      //       <Typography gutterBottom variant="h5" component="div">
      //         Log in
      //       </Typography>
      //       <Typography variant="body2" sx={{ color: 'text.secondary' }}>
      //         You will be prompted with some brief text, followed by a question.
      //       </Typography>
      //     </CardContent>
      //     <CardActions>
      //       <Button onClick={handleLogIn} size="small"  color="primary" align="right">
      //         Start
      //       </Button>
      //     </CardActions>
      //   </Card>
      // </Container>