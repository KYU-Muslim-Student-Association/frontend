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
    <Box m={12} sx={{ margin: { xs: '2rem' } }}>
      <h1 class='heading'>
        <span>Our</span> Scholars
      </h1>
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <MultiActionAreaCard
            name='Hamisi Ali'
            bio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            img={team1}
          />
        </Grid>

        <Grid item xs={12} md={4}>
          <MultiActionAreaCard
            name='Sala Maalim'
            bio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            img={team2}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <MultiActionAreaCard
            name='Abubakar Ali'
            bio='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.'
            img={team3}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Scholars;
