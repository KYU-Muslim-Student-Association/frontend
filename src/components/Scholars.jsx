import React from 'react';

import { Box } from '@mui/material';
//import team images
import DaawaCordinator from '../assets/leaders/AbdiRashid.jpeg';
import Chairman from '../assets/leaders/Chairman.jpeg';
import Welfare from '../assets/leaders/Faraji.jpeg';
import Secretary from '../assets/leaders/Secretary.jpeg';
import Treasurer from '../assets/leaders/juma.jpeg';
import Assistant from '../assets/leaders/Assistant Chairman.jpeg';
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
        <Grid item xs={12} sm={6} md={4} mt={5}>
          <MultiActionAreaCard
            name='Ismail Kodi'
            bio='Chairman'
            img={Chairman}
            props={{ display: 'blog' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} mt={5}>
          <MultiActionAreaCard
            name='Abdirahman Hassan'
            bio='Assistant Chairman'
            img={Assistant}
            props={{ display: 'blog' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4} mt={5}>
          <MultiActionAreaCard
            name='AbdiRashid'
            bio="Daa'wa Cordinator"
            img={DaawaCordinator}
            props={{ display: 'blog' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} mt={5}>
          <MultiActionAreaCard
            name='Faraji Wabuko'
            bio='Welfare Secretary'
            img={Welfare}
            props={{ display: 'blog' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} mt={5}>
          <MultiActionAreaCard
            name='Thwalha'
            bio='Secretary'
            img={Secretary}
            props={{ display: 'blog' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4} mt={5}>
          <MultiActionAreaCard
            name='Juma Hamisi'
            bio='Treasurer'
            img={Treasurer}
            props={{ display: 'blog' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scholars;
