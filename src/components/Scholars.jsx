import React from 'react';

import { Box } from '@mui/material';
//import team images
import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';
import MultiActionAreaCard from './Card';

import Grid from '@mui/material/Grid';

const Scholars = () => {
  return (
    <Box sx={{ margin: { xs: '2rem' , md:'6rem'} }}>
      <h1 class='heading'>
        <span>Our</span> Leadership <span>Team</span>
      </h1>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard
            name='Hamisi Ali'
            bio='Chairman'
            img={team1}
            props={{ display: 'blog' }}
          />
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard
            name='Sala Maalim'
            bio='Tresurer'
            img={team2}
            props={{ display: 'blog' }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <MultiActionAreaCard
            name='Abubakar Ali'
            bio='Assistant Chairman'
            img={team3}
            props={{ display: 'blog' }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scholars;
