import { useState, useEffect } from 'react';

// import { useTheme } from '@mui/material/styles';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Button from '@mui/material/Button';
// import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
// import { areaElementClasses } from '@mui/x-charts/LineChart';

import axios from './axios'




export default function Announcements() {
  const [announcements, setAnnouncements] = useState([])


  useEffect(() => {
      async function fetchData() {
      const req = await axios.get("/api/announcements")
        setAnnouncements(req.data._embedded.announcements)
      }
      fetchData()
  }, [])

  return (
    <Stack spacing={2} sx={{ display: 'flex', mt: 20 }}>
      <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
        <CardHeader
          title="Announcements"
          subheader="Send an announcement email to all your users."
          action={
            <Button variant="contained" onClick={() => {alert('clicked');}}>
              + make Announcement
            </Button>
          }

        >
          <CardContent>

          </CardContent>
        </CardHeader>
      </Card>

      { announcements.map((announcement, index) => (
        <Card variant="outlined" key={index} sx={{ height: '100%', flexGrow: 1 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              { announcement.title }
            </Typography>
            
            <Typography variant="p" component="p">
              { announcement.description }
            </Typography>
            <Typography variant="caption" sx={{ color: 'text.secondary' }} gutterBottom>
                { announcement.date }
            </Typography>
          </CardContent>
        </Card>
      ))}
      
    </Stack>
  )
}