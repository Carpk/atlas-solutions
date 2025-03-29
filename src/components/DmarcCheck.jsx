import { useState, useEffect } from 'react';


// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

// import Paper from '@mui/material/Paper';
// import { styled } from '@mui/material/styles';

// import axios from './axios'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: '#fff',
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

export default function DmarcCheck() {
    // const [dmarcCheck, setDmarcCheck] = useState([])
   
    // useEffect(() => {
    //   async function fetchData() {
    //   const req = await axios.get("/api/dmarcCheck")
    //     setDmarcReports(req.data._embedded.dmarcReports)
    //   }
    //   fetchData()
    // }, [])
  
    return (
      <Stack spacing={2} sx={{ display: 'flex', mt: 20 }}>
        
        <TextField id="domain-field" label="domain" variant="outlined" />
        <Button variant="contained">Check</Button>



        
      </Stack>
    )
}

