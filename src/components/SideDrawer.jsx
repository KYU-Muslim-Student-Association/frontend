import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Button, CssBaseline, Grid } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

export const list = (anchor, toggleDrawer) => (
  <Box
    sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 350 }}
    role='presentation'
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <CssBaseline />
    <Grid
      container
      spacing={0}
      direction='column'
      alignItems='center'
      justifyContent='center'
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={3} sx={{ gap: '2rem' }}>
        <Box
          sx={{ position: 'absolute', left: '0', top: '0', cursor: 'pointer' }}
        >
          <CloseIcon fontSize='large' onClick={toggleDrawer(anchor, false)} />
        </Box>
        <Typography
          variant='h5'
          color='#783b31'
          fontWeight='900'
          textAlign='center'
        >
          PAYMENTS
        </Typography>
        <Box p={3} textAlign='left'>
          <Typography>Semester Contribution</Typography>
          <Typography color='#783b31'>Ksh 300</Typography>
        </Box>

        <Button variant='contained' sx={{ width: '100%', bgcolor: '#c98d83' }}>
          Make Payments
        </Button>
      </Grid>
    </Grid>
  </Box>
);
