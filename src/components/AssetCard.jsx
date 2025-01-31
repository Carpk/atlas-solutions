

// import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
// import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
// import { areaElementClasses } from '@mui/x-charts/LineChart';






export default function AssetCard(asset) {

  
    return (

        <Card variant="outlined" sx={{ height: '100%', flexGrow: 1 }}>
        <CardContent>
        <Typography component="h2" variant="subtitle2" gutterBottom>
            {"title"}
        </Typography>
        <Stack direction="column" sx={{ justifyContent: 'space-between', flexGrow: '1', gap: 1 }}>
            <Stack sx={{ justifyContent: 'space-between' }}>
            <Stack direction="row" sx={{ justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h4" component="p">
                {"value"}
                </Typography>
                <Chip size="small" color={color} label={trendValues[trend]} />
            </Stack>
            <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {"interval"}
            </Typography>
            </Stack>
            <Box sx={{ width: '100%', height: 50 }}>

            </Box>
        </Stack>
        </CardContent>
        </Card>
    )
}