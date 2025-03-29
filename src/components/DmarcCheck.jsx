import { useState, useEffect } from 'react';


// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import axios from './axios'



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DmarcCheck() {
    const [dmarcCheck, setDmarcCheck] = useState("blank")
   
    // useEffect(() => {
    //   async function fetchData() {
    //   const req = await axios.get("/api/dmarcCheck")
    //     setDmarcReports(req.data._embedded.dmarcReports)
    //   }
    //   fetchData()
    // }, [])

    function handleCheck(event) {
      const domain = "bridgewaterstudio.net"
      console.log(event)
      async function fetchData() {
        const req = await axios.get(`https://dns.google/resolve?name=_dmarc.${domain}&type=TXT`)
          setDmarcCheck(req.data.Answer[0].data)
        }
        fetchData()
    }
  
    return (
      <Stack spacing={2} sx={{ display: 'flex', mt: 20 }}>
        
        <TextField 
          id="domain-field" 
          label="domain" 
          variant="outlined" 
          
        />
        <Button variant="contained" onClick={handleCheck}>Check</Button>

        <Item >
          { dmarcCheck }
        </Item>

        <Item>
          { dmarcCheck.split(";").map((item, index) => {
            return <div key={index}>{item}</div>;
          })}

        </Item>

        
      </Stack>
    )
}

