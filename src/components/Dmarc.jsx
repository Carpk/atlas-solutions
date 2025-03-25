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
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Grid from '@mui/material/Grid2';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

// import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import { useQuery } from '@tanstack/react-query';
// import axios from './axios'

import { List, ListItem, ListItemText } from '@mui/material';



export default function DmarcBuilder() {
  const prefix = "v=DMARC1;"
  const [dmarcString, setDmarcString] = useState(prefix)
  const [dmarcRecords, setDmarcRecords] = useState([])
  const testRef = useRef("");

  // const handleDPolicy = radio => event => setDPolicy(radio);

  function getValue(name) {
    const val = document.querySelector('input[name='+name+']:checked')
    return val == null ? "" : val.value
  }

  function getPct(name) {
    const chk = document.querySelector('input[name='+name+']:checked')
    const val = document.querySelector('input[name=policy-pct]')

    return chk != null && val.value != null ? " pct=" + val.value + ";" : ""
  }

  function getEmailData() {
    const val = document.querySelector('input[name=rua-input]')
    console.log(val.value)
  }

  function handleChange() {
    // get user selections
    const domPo = getValue('domain-policy')
    const subPo = getValue('subdomain-policy')
    const forOp = getValue('forensic-options')
    const algDk = getValue('dkim-alignment')
    const algSp = getValue('spf-alignment')

    const polPct = getPct('pct-active')

    getEmailData()


    // setDmarcString(prefix+dPolicy+sPolicy)
    // event.target.value
    // console.log(subPo)

    // rebuild DMARC string
    setDmarcString(prefix + domPo + subPo + polPct + forOp + algDk + algSp)
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
            <Grid container spacing={1} ref={ testRef }>
              <Grid size={2}>
                <FormLabel id="demo-radio-buttons-group-label">Policy</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=" p=none;"
                  name="domain-policy"
                  onChange={ handleChange }
                >
                  <FormControlLabel value=" p=none;" control={<Radio />} label="None" />
                  <FormControlLabel value=" p=quarantine;" control={<Radio />} label="Quarantine" />
                  <FormControlLabel value=" p=reject;" control={<Radio />} label="Reject" />
                </RadioGroup>
              </Grid>
              <Grid size={2}>
                <FormLabel id="demo-radio-buttons-group-label">Subdomain Policy</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="subdomain-policy"
                  onChange={ handleChange }
                >
                  <FormControlLabel value="" control={<Radio />} label="Omit" />
                  <FormControlLabel value=" sp=none;" control={<Radio />} label="None" />
                  <FormControlLabel value=" sp=quarantine;" control={<Radio />} label="Quarantine" />
                  <FormControlLabel value=" sp=reject;" control={<Radio />} label="Reject" />
                </RadioGroup>
              </Grid>
              <Grid size={2}>



                <FormLabel id="demo-radio-buttons-group-label">Policy Percentage</FormLabel>
                <FormGroup>
                  <FormControlLabel  
                    control={<Checkbox />} 
                    label="pct" 
                    name="pct-active"
                    onChange={ handleChange }
                  />
                  <TextField 
                    name="policy-pct" 
                    label="percentage" 
                    type="number" 
                    variant="outlined"
                    onChange={ handleChange } 
                  />  
                </FormGroup>



              </Grid>
              <Grid size={2}>
                <FormLabel id="demo-radio-buttons-group-label">Forensic Options</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="forensic-options"
                  onChange={ handleChange }
                >
                  <FormControlLabel value="" control={<Radio />} label="Omit" />
                  <FormControlLabel value=" fo=0;" control={<Radio />} label="both fail" />
                  <FormControlLabel value=" fo=1;" control={<Radio />} label="either fail" />
                  <FormControlLabel value=" fo=d;" control={<Radio />} label="DKIM fails" />
                  <FormControlLabel value=" fo=s;" control={<Radio />} label="SPF fails" />
                </RadioGroup>
              </Grid>


              <Grid size={2}>
                <FormLabel id="demo-radio-buttons-group-label">DKIM Alignment</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="dkim-alignment"
                  onChange={ handleChange }
                >
                  <FormControlLabel value="" control={<Radio />} label="Omit" />
                  <FormControlLabel value=" adkim=s;" control={<Radio />} label="Strict" />
                  <FormControlLabel value=" adkim=r;" control={<Radio />} label="Relaxed" />
                </RadioGroup>
              </Grid>

              <Grid size={2}>
                <FormLabel id="demo-radio-buttons-group-label">SPF Alignment</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue=""
                  name="spf-alignment"
                  onChange={ handleChange }
                >
                  <FormControlLabel value="" control={<Radio />} label="Omit" />
                  <FormControlLabel value=" aspf=s;" control={<Radio />} label="Strict" />
                  <FormControlLabel value=" aspf=r;" control={<Radio />} label="Relaxed" />
                </RadioGroup>
              </Grid>


              <Grid size={6}>
                <FormLabel id="rua-label">RUA</FormLabel>
                <TextField
                  id="rua-data" 
                  name="rua-input"
                  // label="sample@example.net" 
                  placeholder="sample@example.net"
                  variant="outlined" 
                  onChange={ handleChange }
                />
              </Grid>
              <Grid size={6}>
                <FormLabel id="ruf-label">RUF</FormLabel>
                <TextField  
                  id="ruf-data" 
                  name="ruf-input"  
                  // label="sample@example.net" 
                  placeholder="sample@example.net"
                  variant="outlined" 
                  onChange={ handleChange }
                />
              </Grid>


              <Grid size={12}>
                <Box sx={{ width: 800, maxWidth: '100%' }}>
                  <FormLabel id="dmarc-label">DMARC Record</FormLabel>
                  <TextField 
                    id="DMARC"
                    fullWidth 
                    value= { dmarcString }
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



  // function handleDPolicy(event) {
  //   dPolicy.current = event.target.value

  //   // document.querySelector('input[name=domain-policy]:checked').value
  //   // console.log(testRef.current.querySelector('mui-checked'))
  //   console.log(testRef.current.querySelector('input[name=domain-policy]:checked').value)
  //   // console.log(testRef.current)

  //   setDmarcString(prefix + dPolicy.current + sPolicy.current + fOption.current + aDkim.current + aSpf.current)
  // } 

  // function handleSPolicy(event) {
  //   sPolicy.current = event.target.value

  //   setDmarcString(prefix + dPolicy.current + sPolicy.current + fOption.current + aDkim.current + aSpf.current)
  // }

  // function handleFOptions(event) {
  //   fOption.current = event.target.value

  //   setDmarcString(prefix + dPolicy.current + sPolicy.current + fOption.current + aDkim.current + aSpf.current)
  // }

  // function handleADKIM(event) {
  //   aDkim.current = event.target.value

  //   setDmarcString(prefix + dPolicy.current + sPolicy.current + fOption.current + aDkim.current + aSpf.current)
  // }

  // function handleASPF(event) {
  //   aSpf.current = event.target.value

  //   setDmarcString(prefix + dPolicy.current + sPolicy.current + fOption.current + aDkim.current + aSpf.current)
  // }