import { useState, useEffect } from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import axios from './axios'

export default function Account() {
    const [account, setAccount] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/api/accounts/1")
            // "/account/{id}/appusersCount"
            // const final acct = req.data._embedded.accounts[]
            setAccount(req.data)
            console.log(req.data)
        }
        fetchData()
     }, [])
  
    return (
        <Container sx={{ display: 'flex', mt: 20 }}>
          <Typography variant="h4" gutterBottom>
            Account
          </Typography>
          <Typography variant="h3" gutterBottom>
            { account.name }
          </Typography>
            


        </Container>
    )
}