import { useState, useEffect } from 'react';

// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
// import { areaElementClasses } from '@mui/x-charts/LineChart';

import axios from './axios'
import { Container } from '@mui/material';




export default function Dashboard() {
  const [announcements, setAnnouncements] = useState([])


  useEffect(() => {
      async function fetchData() {
      const req = await axios.get("/api/announcements")
        setAnnouncements(req.data._embedded.announcements)
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
              <Button variant="contained" onClick={() => {alert('clicked');}}>
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
              <Button variant="contained" onClick={() => {alert('clicked');}}>
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
              <Button variant="contained" onClick={() => {alert('clicked');}}>
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
                <Button variant="contained" onClick={() => {alert('clicked');}}>
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
                <Button variant="contained" onClick={() => {alert('clicked');}}>
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
                <Button variant="contained" onClick={() => {alert('clicked');}}>
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