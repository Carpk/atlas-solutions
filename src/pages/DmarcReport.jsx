import { useState, useEffect } from 'react';

// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import axios from '../axios'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function DmarcReport() {
    const [dmarcReports, setDmarcReports] = useState([])
   
    useEffect(() => {
      async function fetchData() {
      const req = await axios.get("/api/dmarcReports")
        setDmarcReports(req.data._embedded.dmarcReports)
      }
      fetchData()
    }, [])
  
    return (
    
      <Stack spacing={2} sx={{ display: 'flex', mt: 20 }}>
        { dmarcReports.map((report, index) => (
          <Item key={ index }>
            { report.organization } 
          </Item> 
          
        ))}
        
      </Stack>
    )
}

