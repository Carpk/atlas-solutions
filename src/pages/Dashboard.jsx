import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
// import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
// import { areaElementClasses } from '@mui/x-charts/LineChart';

import axios from '../axios'
import { Container } from '@mui/material';




export default function Dashboard() {
  const [links, setLinks] = useState([])
  const navigate = useNavigate();


  useEffect(() => {
      async function fetchData() {
      const req = await axios.get("/api")
        setLinks(req.data._links)
      }
      fetchData()
  }, [])

  return (
    <Container sx={{ display: 'flex', mt: 20 }}>
      <Grid container spacing={2}>
        <Grid size={12}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
        <Grid size={4}>
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardHeader
            title="DMARC Builder"
            subheader=""
            action={
              <Button variant="contained" onClick={() => {navigate('/dmarc-builder');}}>
                go
              </Button>
            }
          >
            <CardContent>
            </CardContent>
          </CardHeader>
        </Card>
        </Grid>
        <Grid size={4}>
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardHeader
            title="DMARC Reports"
            subheader=""
            action={
              <Button variant="contained" onClick={() => {navigate('/dmarc-reports');}}>
                go
              </Button>
            }
          >
            <CardContent>

            </CardContent>
          </CardHeader>
        </Card>
        </Grid>
        <Grid size={4}>
        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
          <CardHeader
            title="Temp"
            subheader=""
            action={
              <Button variant="contained" onClick={() => {navigate('/account');}}>
                go
              </Button>
            }
          >
            <CardContent>

            </CardContent>
          </CardHeader>
        </Card>
        </Grid>
        <Grid size={4}>
          <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardHeader
              title="Assets"
              subheader=""
              action={
                <Button variant="contained" onClick={() => {navigate('/assets');}}>
                  go
                </Button>
              }
            >
              <CardContent>

              </CardContent>
            </CardHeader>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardHeader
              title="Users"
              subheader=""
              action={
                <Button variant="contained" onClick={() => {navigate('/account');}}>
                  go
                </Button>
              }
            >
              <CardContent>

              </CardContent>
            </CardHeader>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardHeader
              title="Account"
              subheader=""
              action={
                <Button variant="contained" onClick={() => {navigate('/account');}}>
                  go
                </Button>
              }
            >
              <CardContent>

              </CardContent>
            </CardHeader>
          </Card>
        </Grid>
        <Grid size={4}>
          <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
            <CardHeader
              title="Help Tickets"
              subheader=""
              action={
                <Button variant="contained" onClick={() => {navigate('/help-tickets');}}>
                  go
                </Button>
              }
            >
              <CardContent>

              </CardContent>
            </CardHeader>
          </Card>
        </Grid>
      </Grid>

    </Container>
  )
}