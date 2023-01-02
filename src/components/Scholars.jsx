import { Container, maxHeight } from '@mui/system';
import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Button, CardActionArea, CardActions } from '@mui/material';
//import team images
import team1 from '../assets/images/team-1.png';
import team2 from '../assets/images/team-2.png';
import team3 from '../assets/images/team-3.png';
import MultiActionAreaCard from './Card';

import Grid from '@mui/material/Grid';


const Scholars = () => {
  return (
    <Box m={12}>
        <h1 class="heading"><span>Our</span> Scholars</h1>
       <Grid container spacing={1}>

        <Grid item xs={12}  md={4}>
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
