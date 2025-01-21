import { useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import { List, ListItem, ListItemText } from '@mui/material';

import Intro from './intro';
import Tactics from './tactics'
import Safety from './safety'


  // on the rise, what they want, what to look for, common tactics
  // report incidents, strong passwords, email, social media, mobile deivces
  // phishing, smishing, vishing,

export default function SecTraining() {
  const [moduleNum, setModuleNum] = useState(0)
  const [slideNum, setSlideNum] = useState(0)
  const [displayQuestions, setDisplayQuestions] = useState(false)
  
  const moduleList = [Intro, Tactics, Safety]


  function handleNextSlide() {
    if (slideNum < moduleList[moduleNum].length - 1) {
      setSlideNum(slideNum + 1)
    } else {
      setDisplayQuestions(false)
      setSlideNum(0)
    }
    console.log(slideNum)
  }

  function handleSelectModule(num) {
    setModuleNum(num);
    setDisplayQuestions(true)
  }


  const ModComp = () => {
    const SlideComp = moduleList[moduleNum][slideNum]

    return (
        <SlideComp handleClick={handleNextSlide} />
      )
  }

  function ModuleSelect()  {    
    return (
      <Card sx={{ alignItems: 'center' }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Welcome to Security Awareness Training
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary' }}>
            There are three modules to choose from.
          </Typography>
          <CardActions>
            <List>
              <ListItem key={0}>
                <Button variant="contained" size="small" color="primary" onClick={ () => handleSelectModule( 0 ) }>
                  Intro
                </Button>
                <ListItemText primary={ "Intro" } />
              </ListItem>
              <ListItem key={1}>
                <Button variant="contained" size="small" color="primary" onClick={ () => handleSelectModule( 1 ) } >
                  Tactics
                </Button>
                <ListItemText primary={ "Phishing" } />
              </ListItem>
              <ListItem key={2}>
                <Button variant="contained" size="small" color="primary" onClick={ () => handleSelectModule( 2 ) }>
                  Prevention
                </Button>
                <ListItemText primary={ "Security" } />
              </ListItem>
            </List>
          </CardActions>
        </CardContent>
      </Card>
    )
  }


  return (
    <Stack
      direction={{ xs: 'column-reverse', md: 'row' }}
      sx={{
        justifyContent: 'center',
        height: 'calc((1 - var(--template-frame-height, 0)) * 100%)',
        marginTop: 'max(80px - var(--template-frame-height, 0px), 0px)',
        minHeight: '100%',
        gap: { xs: 6, sm: 12 },
        p: 2,
        mx: 'auto',
      }}
    >
      <Container sx={{ alignItems: 'center', maxWidth: 345 }}>
        <CssBaseline />
        { displayQuestions ?  <ModComp />  : <ModuleSelect /> }
        
      </Container>
    </Stack>
  );
}


  // let currentModule: (() => JSX.Element)[];
  // let TestComponent: (() => JSX.Element) = ModuleSelect;
  // const placeholder = Intro[0]
  // const [CurrentComponent, setCurrentComponent] = useState<JSX.Element>( placeholder )



  // const intro = () =>{
  //   return (
  //     <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
  //       <CardContent>
  //         <Typography gutterBottom variant="h5" component="div">
  //           Security Awareness Training
  //         </Typography>
  //         <Typography variant="body2" sx={{ color: 'text.secondary' }}>
  //           There are 8 questions, each with an independent scenario they are based on.
  //           You will be prompted with some brief text, followed by a question.
  //         </Typography>
  //       </CardContent>
  //       <CardActions>
  //         <Button onClick={handleStartQuestions} size="small"  color="primary" align="right">
  //           Start
  //         </Button>
  //       </CardActions>
  //     </Card>
  //   )
  // }




//   <Button 
//   variant="contained"
//   onClick={handleModuleOne} 
//   size="small"  
//   color="primary"
//   sx={{ width: { xs: '100%', sm: 'fit-content' }, mr: 3 }}
// >
//   Begin
// </Button>