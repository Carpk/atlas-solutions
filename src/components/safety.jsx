import { useState } from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
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



const Report = ({ handleClick }) =>  {
  
  // const listItems = [
  //   "1,265% increase in malicious phishing messages since Q4 2022",
  //   "On average, 31,000 phishing attacks were sent on a daily basis",
  //   "967% increase in credential phishing",
  //   "68% of all phishing emails are text-based Business Email Compromise (BEC)",
  //   "39% of al mobile-based attacks were SMS phishing (Smishing)"
  // ]

  return (
    <Card sx={{ alignItems: 'center' }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Report the Incident
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 1 }}>
            If no one knows there is a problem, then it can&#39;t be fixed. 
          </Typography>
          <Typography variant="body1" sx={{ color: 'black', mb: 1 }}>
            Credential phishing are attacks that includes fake login pages, emails, text 
            messages, and AI augmented voice/video communication, all with the intent of 
            stealing login credentials.
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
            https://slashnext.com/wp-content/uploads/2024/12/SlashNext-2024-Phishing-Intelligence-Report.pdf
          </Typography>
          <Button variant="contained" size="small" color="primary" onClick={ handleClick }>
            Next
          </Button>
        </CardContent>
    </Card>

  );
}


const Passwords = ({ handleClick }) => {

  const items = [
    {
      title: "Multichannel Phishing",
      text: <>
      Phishing attacks that exploit multiple communication channels beyond email to 
      deceive victims, such as browser links, QR codes, SMS, or cloud-based collaboration tools.
      </>
    },
  ]

  return (
    <Card sx={{ alignItems: 'center' }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Use Strong Passwords
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

const Mobile = ({ handleClick }) => {
  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Mobile Devices
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Having a cracked, rooted, or jailbroken phone on the compnay network is prohibited. 
          The individuals who develop the rooting software that allowed you the admin access to your phone, 
          also now have admin access to your phone which they can use to install malware, spyware, scrape 
          personal data, or adopt your device to a botnet. In addition, third party apps also could be laden 
          with the same malicious software. 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Another tactic used is taking a piece of software, could be a rooting kit, third party app, or
          even a legitimate app, and wrapping it in some malicious payload. The original author of the app
          had good intentions, but someone can take thier work, add malicious software to it, and redistrubite
          it on the web. 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Keep your devices up-to-date. 
          Use only well known vendors.
          Never leave your device unattended.
          Ensure your device is protected with a passcode.
          Use a VPN when on other networks.
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary', mb: 1 }}>
          https://www.pcmag.com/news/be-careful-these-android-apps-are-installing-malware-stealing-your-data
          https://www.bleepingcomputer.com/news/security/new-zombinder-platform-binds-android-malware-with-legitimate-apps/
        </Typography>
        <Button variant="contained" size="small" color="primary" onClick={ handleClick }>
          Next
        </Button>
      </CardContent>
    </Card>
  );
}

const Privacy = ({ handleClick }) => {
  const listItems = [
    `Personal Identifiable Information - Names, SSNs, Addresses, Phone Numbers, Driver's License Number, 
      Gender, Race, Birthdates, Fingerprints, Factial Geometry, and Voice Signatures`,
    `Protected Health Information -`,
    `Intellectual Property - Patents, Copyrights, Trademarks, Trade secrets, Brands, Inventions, Designs, 
      Artistic works, New plant varieties, and Geographical indications.`,
  ]

  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Data Protection and Privacy
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

const SocialMedia = ({ handleClick }) => {
  const listItems = [
    `Personal Identifiable Information - Names, SSNs, Addresses, Phone Numbers, Driver's License Number, 
      Gender, Race, Birthdates, Fingerprints, Factial Geometry, and Voice Signatures`,
    `Protected Health Information -`,
    `Intellectual Property - Patents, Copyrights, Trademarks, Trade secrets, Brands, Inventions, Designs, 
      Artistic works, New plant varieties, and Geographical indications.`,
  ]

  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Data Protection and Privacy
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

const Data = ({ handleClick }) => {
  // const listItems = [
  //   `Personal Identifiable Information - Names, SSNs, Addresses, Phone Numbers, Driver's License Number, 
  //     Gender, Race, Birthdates, Fingerprints, Factial Geometry, and Voice Signatures`,
  //   `Protected Health Information -`,
  //   `Intellectual Property - Patents, Copyrights, Trademarks, Trade secrets, Brands, Inventions, Designs, 
  //     Artistic works, New plant varieties, and Geographical indications.`,
  // ]

  return (
    <Card sx={{ alignItems: 'center', maxWidth: 345 }} >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Data Protection and Privacy
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            As per company policy, employees are responsible for ensuring the security of the data they 
            access. All data needs to be restricted 
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            
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

export default [Report, Passwords, Mobile, Privacy, Data];


