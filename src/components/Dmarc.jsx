import { useState, useEffect, useRef } from 'react';

// import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid2';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { useQuery } from '@tanstack/react-query';
import axios from './axios'

import { List, ListItem, ListItemText } from '@mui/material';



export default function DmarcBuilder() {
  const prefix = "v=DMARC1;"
  const [dmarcString, setDmarcString] = useState(prefix)
  const [dmarcRecords, setDmarcRecords] = useState([])
  const dPolicy = useRef("");
  const sPolicy = useRef("");

  // const handleDPolicy = radio => event => setDPolicy(radio);

  function handleChange(event) {
    // rebuild entire string

    setDmarcString(prefix+dPolicy+sPolicy)
    // event.target.value

    console.log(dPolicy.current)
  }

  useEffect(() => {
    async function fetchData() {
      // const req = await axios.get("/api/dmarcRecords")
      // // const records = req.data._embedded.dmarcRecords
      // setDmarcRecords(req.data._embedded.dmarcRecords)
      // console.log(req.data._embedded.dmarcRecords)
    }
    fetchData()
  }, [])

  return (
    <Container sx={{ py: { xs: 8, sm: 16 } }}>
      <Card >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            DMARC Builder
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.primary' }}>
          
          </Typography>
          <CardActions>
            <Grid container spacing={2}>
              <Grid size={4}>


                <FormLabel id="demo-radio-buttons-group-label">Policy</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="reject"
                  name="domain-policy"
                  // value={dPolicy}
                  // checked={policy === self.value}
                  onChange={handleChange}
                  ref={ dPolicy }
                >
                  <FormControlLabel value="p=none" control={<Radio />} label="None" />
                  <FormControlLabel value="p=quarantine" control={<Radio />} label="Quarantine" />
                  <FormControlLabel value="p=reject" control={<Radio />} label="Reject" />
                </RadioGroup>


              </Grid>
              <Grid size={4}>
                <FormLabel id="demo-radio-buttons-group-label">Subdomain Policy</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="reject"
                  name="subdomain-policy"
                  onChange={handleChange}
                >
                  <FormControlLabel value="" control={<Radio />} label="Omit" />
                  <FormControlLabel value="sp=none" control={<Radio />} label="None" />
                  <FormControlLabel value="sp=quarantine" control={<Radio />} label="Quarantine" />
                  <FormControlLabel value="sp=reject" control={<Radio />} label="Reject" />
                </RadioGroup>
              </Grid>
              <Grid size={4}>
                <FormLabel id="demo-radio-buttons-group-label">Forensic Options</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="reject"
                  name="forensic-options"
                  onChange={handleChange}
                >
                  <FormControlLabel value="0" control={<Radio />} label="0 - all fail" />
                  <FormControlLabel value="1" control={<Radio />} label="1 - any fail" />
                  <FormControlLabel value="d" control={<Radio />} label="d - DKIM fails" />
                  <FormControlLabel value="s" control={<Radio />} label="s - SPF fails" />
                </RadioGroup>
              </Grid>
                {/* <FormLabel id="demo-radio-buttons-group-label">RUA</FormLabel>
                <TextField onChange={handleChange} id="outlined-basic" label="Outlined" variant="outlined" /> */}
              <Grid size={12}>
                <Box sx={{ width: 500, maxWidth: '100%' }}>
                  <FormLabel id="demo-radio-buttons-group-label">DMARC Record</FormLabel>
                  <TextField 
                    id="DMARC"
                    fullWidth 
                    defaultValue={ dmarcString } 
                    slotProps={{
                      input: {
                        readOnly: true,
                      },
                    }}
                  />
                </Box>
              </Grid>
            </Grid>
          </CardActions>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Saved Records
          </Typography>
          <List>
            { dmarcRecords.map((record, index) => (
              <ListItem key={ index }>
                <ListItemText primary={
                  `v=DMARC1; 
                   p=${record.policy};
                   ${ record.spolicy ? "spolicy:" + record.spolicy : "" }
                   rua=mailto:${record.rua}
                   ${ record.ruf ? "ruf:" + record.ruf : "" }
                   ${ record.pct ? "pct:" + record.pct : "" }`
                  } />
                <EditIcon />
                <DeleteIcon />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}


