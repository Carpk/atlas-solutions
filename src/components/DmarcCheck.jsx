import { useState, useEffect } from 'react';


// import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
    const [domainName, setDomainName] = useState()
   
    // useEffect(() => {
    //   async function fetchData() {
    //   const req = await axios.get("/api/dmarcCheck")
    //     setDmarcReports(req.data._embedded.dmarcReports)
    //   }
    //   fetchData()
    // }, [])

    function handleCheck() {
      const domain = "bridgewaterstudio.net"
      console.log(domainName)
      async function fetchData() {
        const req = await axios.get(`https://dns.google/resolve?name=_dmarc.${domain}&type=TXT`)
          setDmarcCheck(req.data.Answer[0].data)
        }
        fetchData()
    }

    function getDescription( comp ) {
      const val = comp.split("=")
      
     
      return ""
      // return <TableCell align="right"> val </TableCell>
    }
  
    return (
      <Stack spacing={2} sx={{ display: 'flex', mt: 20 }}>
        
        <TextField 
          id="domain-field" 
          label="domain" 
          variant="outlined" 
          onChange={(e) => setDomainName(e.target.value)}
        />
        <Button variant="contained" onClick={handleCheck}>Check</Button>

        <Item >
          { dmarcCheck }
        </Item>

        <Item>
          { dmarcCheck.split(";").map((item, index) => {
              return <div key={index}>{item}</div>;
          })}

          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Component</TableCell>
                  <TableCell align="right">Value</TableCell>
                  <TableCell align="right">Valid</TableCell>
                  <TableCell align="right">Options</TableCell>
                  <TableCell align="right">Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                { dmarcCheck.split(";").map((item) => (
                  <TableRow
                    key={item}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item}
                    </TableCell>
                    <TableCell align="right">{ 3 }</TableCell>
                    <TableCell align="right">{ 3 }</TableCell>
                    <TableCell align="right">{ 3 }</TableCell>
                    <TableCell align="right">{ getDescription(item) }</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Item>
      </Stack>
    )
}

