import React from 'react';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import {Navigate}  from 'react-router-dom';



const CardContainer = ({ blog }) => {
 

  return (
    <Card
      elevation={0}
      my={3}
      sx={{
        maxWidth: 600,
        cursor: 'pointer',
        '&:hover': { color: 'success.main' },
      }}
      onClick={() => Navigate(`/${blog.slug}/`)}
    >
      <CardActionArea>
        <img
          alt='card media'
          src={blog.image}
          placeholder='blurred'
        />
        <CardContent>
          <Typography variant='h6' sx={{ fontWeight: '600' }}>
            {blog.title}
          </Typography>
          <Typography variant='p' my={3} color='grey'>
            {blog?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Grid container spacing={1} mt={1}>
          <Grid item sm={2}>
            <img alt='author avator' src={blog.image} />
          </Grid>
          <Grid item sm={10}>
            <Typography sx={{ fontSize: '16px' }}>
              {blog?.author}
            </Typography>
            <Typography sx={{ fontSize: '14px', color: 'grey' }}>
              {blog?.date}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};
export default CardContainer;