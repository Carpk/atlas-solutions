import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


// import PhishingIcon from '@mui/icons-material/Phishing';
// import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

// import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';



const EarlyDays = ({ handleClick }) =>  {
  
  const data = {
    title: "419 Scams",
    text1: <>
      One of the original and popular forms of fraud is the Advance-Fee Scam, or Nigerian 419 scam. 
      An individual would be contacted by someone pretending to be a Nigerian prince and ask the recipient
      for money to pay for fees in for transfering his wealth out of his country which has undergone some 
      domestic/political struggle. 
    </>,
    text2: <>
      While variations are common on the Internet today, this type of scam predates the Internet and documented
      variations are found in the 1800s where it is based on the promise of a big payoff by being complicit in some 
      illegal act. 
  </>,
    ref: "https://en.wikipedia.org/wiki/Advance-fee_scam"
  }

  return (
    <Card sx={{ alignItems: 'center' }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            { data.title }
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 1 }}>
            { data.text1 }
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 1 }}>
          { data.text2 }
          </Typography>
          {/* <List>
            { listItems.map((item, index) => (
              <ListItem key={ index } disablePadding>
                <ArrowRightRoundedIcon />
                <ListItemText 
                  primary={ item }
                />
              </ListItem>
            ))}
          </List> */}
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
            Mobile users encounter up to 600 threats annually, highlighting the critical shift 
            from email-only to multi-channel attack vectors
            attackers increasingly target messaging platforms beyond email, including business 
            collaboration tools, SMS, and social media. 
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
          mobile users encounter up to 600 threats annually, highlighting the critical shift from 
          email-only to multi-channel attack vectors
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 1 }}>
            While the FBI hasn&#39;t realeased statistics for 2024, some cybersecurity orgaizations who
            work in preventing phishing attacks, such as SlashNext, have reported that Credential 
            Phishing Attacks increased by 703% in the Second Half of 2024, and an overall 
            of 202% in email-based attacks with 80% being zero-day threats. Credential phishing are 
            attacks that includes fake login pages, emails, text messages, QR codes, and AI augmented voice/video 
            communication, all with the intent of stealing login credentials. Zero-day are attacks
            on vulnerabilites that were previously unknown.
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 1 }}>
            SlashNext also reported an uptick in multi-dimensional attacks, where multi-channel phishing 
            is integrated with social engineering and link based threats, Such as the Black Basta campaign.



            increasingly ineffective against modern, AI-powered attack campaigns

            Users encounter up to 600 mobile threats annually on average.

            attackers increasingly target messaging platforms beyond email, including business 
            collaboration tools, SMS (text messages), and social media.
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
            { data.ref }
          </Typography>
          <Button variant="contained" size="small" color="primary" onClick={ handleClick }>
            Next
          </Button>
        </CardContent>
    </Card>

  );
}
























const PhishingTypes = ({ handleClick }) => {

  const items = [
    {
      title: "Multichannel Phishing",
      text: <>
      Phishing attacks that exploit multiple communication channels beyond email to 
      deceive victims, such as browser links, QR codes, SMS, or cloud-based collaboration tools.
      </>
    },
    {
      title: "Spear Phishing",
      text: <>
      A targeted phishing attack aimed at specific individuals or 
      organizations through personalized malicious emails.
      </>
    },
    {
      title: "Credential Phishing",
      text: <>
      A type of cyber-attack focused on tricking individuals into revealing 
      their login credentials through deceptive emails, websites, or messages.
      </>
    },
    {
      title: "Social Engineering",
      text: <>
      A set of tactics used to manipulate, influence, or deceive people into divulging 
                  sensitive information or performing actions that aid cyber-attacks. For example, 
                  attacks categorized as business email compromise (BEC) fall into this category.
      </>
    },
    {
      title: "Browser Messaging Phishing",
      text: <> Phishing attacks that leverage browser messaging services, direct messaging platforms like 
                  LinkedIn, social media, chat services like Slack or Microsoft Teams, or personal communicationtools 
                  (e.g., personal Gmail accounts) to trick users into clicking malicious links.</>
    },
    {
      title: "Mobile Phishing",
      text: <>
      Phishing attacks targeting mobile devices throughlinks to malicious mobile websites, 
      SMS text messages (Smishing), or QR code phishing.
      </>
    },
  ]

  return (
    <Card sx={{ alignItems: 'center' }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Common types of phishing attacks
          </Typography>

          <Typography variant="body1" sx={{ color: 'text.primary' }}>
          
          </Typography>
          <List>
            { items.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ArrowRightIcon />
                <ListItemText 
                  primary={ item.title }
                  secondary={ item.text }
                />
              </ListItem>
            ))}
          </List>
          <Typography variant="body1" sx={{ color: 'text.primary' }}>
          
          </Typography>
          <Button variant="contained" size="small" color="primary" onClick={ handleClick }>
            Next
          </Button>
        </CardContent>
    </Card>

  );
}

const Q1 = ({ handleClick }) => {
  const [isQuestion, setIsQuestion] = useState(true)

  function handleSubmit() {
    if (isQuestion) {
      // display if correct or incorrect answer
      
      setIsQuestion(false)
    } else {
      handleClick()
    }
  }

  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Question 1:
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          What is the most common type of cyber crime?
        </Typography>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel value="extortion" control={<Radio />} label="Extortion" />
            <FormControlLabel value="breach" control={<Radio />} label="Data Breach" />
            <FormControlLabel value="phishing" control={<Radio />} label="Phishing" />
            <FormControlLabel value="support" control={<Radio />} label="Tech Support Scam" />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" size="small" color="primary" onClick={ handleSubmit }>
          { isQuestion ? "Submit" : "Next"}
        </Button>
      </CardContent>
    </Card>
  );
}

const Targets = ({ handleClick }) => {
  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The target is you
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            SlashNext report Credential Phishing Attacks Increased by 703% in the Second Half of 2024, and an 
            overall of 202% in email-based attacks with 80% being zero-day threats. Credential phishing are 
            attacks that includes fake login pages, emails, text messages, and  AI augmented voice/video 
            communication, all with the intent of stealing login credentials.

          </Typography>
          <Button variant="contained" size="small" color="primary" onClick={ handleClick }>
            Next
          </Button>
        </CardContent>
        
    </Card>

  );
}

const TheWant = ({ handleClick }) => {
  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            The target is you
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>

          </Typography>
          <Button variant="contained" size="small" color="primary" onClick={ handleClick }>
            Next
          </Button>
        </CardContent>
    </Card>

  );
}

// on the rise, what they want, what to look for, common tactics
// report incidents, strong passwords, email, social media, mobile deivces
// phishing, smishing, vishing,



export default [EarlyDays, PhishingTypes, Q1, Targets, TheWant];





                            // <>
                
              //   <Typography variant="body1" sx={{ color: 'text.primary' }}>

              //     { item.title }
              //   </Typography>
                
              //   <Typography variant="body2" sx={{ color: 'text.primary' }}>
              //     { item.text }
              //   </Typography>
              // </>