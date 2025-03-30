import { useState, useEffect } from 'react';

import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';
// import { GridRowsProp, GridColDef } from '@mui/x-data-grid';
import axios from '../axios'



export default function Assets() {
    const [assets, setAssets] = useState([])

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/api/assets")
            // const temp = req.data._embedded.assets.map((asset, index) =>
            //     asset.id = index + 1
            // );

            setAssets(req.data._embedded.assets)
            // console.log(temp[0])
        }
        fetchData()
    }, [])
  

    const columns = [
        { field: 'number', headerName: 'Identifier', width: 150 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'model', headerName: 'Model', width: 150 },
        { field: 'serial', headerName: 'Serial', width: 150 },
        { field: 'manufacturer', headerName: 'Manufac.', width: 150 },

    ];


    return (
        <Box sx={{ display: 'flex', mt: 20 }}>
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Box sx={{ width: '100%', maxWidth: { sm: '100%', md: '1700px' } }}>
              {/* cards */}
              <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Assets Overview
              </Typography>
              {/* <Grid container spacing={2} columns={12} sx={{ mb: (theme) => theme.spacing(2) }}> */}
                
                {/* {assets.map((asset, index) => (
                  <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                    <StatCard {...card} />
            
                  </Grid>
                ))} */}

                <DataGrid
                    checkboxSelection
                    rows={assets}
                    columns={columns}
                    getRowId={() => crypto.randomUUID()}
                    getRowClassName={(params) => (params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd')}
                    initialState={{
                    pagination: { paginationModel: { pageSize: 20 } },
                    }}
                    sx={(theme) => ({
                    borderColor:
                        theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
                    '& .MuiDataGrid-cell': {
                        borderColor:
                        theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
                    },
                    })}
                    pageSizeOptions={[10, 20, 50]}
                    disableColumnResize
                    density="compact"
                    slotProps={{
                    filterPanel: {
                        filterFormProps: {
                        logicOperatorInputProps: {
                            variant: 'outlined',
                            size: 'small',
                        },
                        columnInputProps: {
                            variant: 'outlined',
                            size: 'small',
                            sx: { mt: 'auto' },
                        },
                        operatorInputProps: {
                            variant: 'outlined',
                            size: 'small',
                            sx: { mt: 'auto' },
                        },
                        valueInputProps: {
                            InputComponentProps: {
                            variant: 'outlined',
                            size: 'small',
                            },
                        },
                        },
                    },
                    }}
                />
              {/* </Grid> */}
              {/* <Typography component="h2" variant="h6" sx={{ mb: 2 }}>
                Details
              </Typography> */}
              {/* <Grid container spacing={2} columns={12}>
                <Grid size={{ xs: 12, lg: 6 }}>
                  <Stack gap={2} direction={{ xs: 'column', sm: 'row' }}>
                    <CustomTreeView />
                    <ChartUserByCountry />
                  </Stack>
                </Grid>
              </Grid> */}
            </Box>
          </Stack>
        </Box>
      </Box>
    )
}