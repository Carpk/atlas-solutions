import { useState, useEffect } from 'react';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid2';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { DataGrid } from '@mui/x-data-grid';

import axios from './axios'




export default function HelpTickets() {
    const [helpTickets, setHelpTickets] = useState(0)

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/api/helpTickets")

          setHelpTickets(req.data._embedded.helpTickets)
          console.log(req.data._embedded.helpTickets)
        }
        fetchData()
    }, [])
  

    const columns = [
        { field: 'title', headerName: 'Title', width: 250 },
        { field: 'text', headerName: 'Text', width: 350 },
        { field: 'urgency', headerName: 'Urgency', width: 100 },
        { field: 'isOpen', headerName: 'Open', width: 75 },
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

                <DataGrid
                    checkboxSelection
                    rows={helpTickets}
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
            </Box>
          </Stack>
        </Box>
      </Box>
    )
}