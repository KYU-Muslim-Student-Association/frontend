import React from 'react';

import { Box } from '@mui/material';
//import team images
import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';
import MultiActionAreaCard from './Card';
import Typography from '@mui/material/Typography';

import Grid from '@mui/material/Grid';

const Scholars = () => {
  return (
    <Box sx={{ margin: { xs: '2rem', md: '12rem' } }} id='leaders'>
      <Typography
        variant='h3'
        className='heading'
        sx={{ fontWeight: '900' }}
        my={4}
      >
        <span>Our</span> Leadership <span>Team</span>
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard
            name='Ismail Kodi'
            bio='Chairman'
            img={team1}
            props={{ display: 'blog' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard
            name='Abdarahman'
            bio='Assistant Chairman'
            img={team2}
            props={{ display: 'blog' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard
            name='Juma Hamisi'
            bio='Treasurer'
            img={team3}
            props={{ display: 'blog' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scholars;
