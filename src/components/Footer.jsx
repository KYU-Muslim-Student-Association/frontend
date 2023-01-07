import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

const Footer = () => {
  return (
    <footer
      style={{ backgroundColor: '#f2f1ec', color: 'black', padding: '24px' }}
    >
      <Grid container justify='space-evenly'>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          <Typography variant='h6' gutterBottom>
            Address
          </Typography>
          <Typography variant='subtitle1'>
            Stay connected to us through our social media platforms.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          <Typography variant='h6' gutterBottom>
            E-mail
          </Typography>
          <Link to='#'>kyumsa@gmail.com</Link>
          <br />
        </Grid>
        <Grid item xs={12} sm={4} style={{ textAlign: 'center' }}>
          <Typography variant='h6' gutterBottom>
            Call us
          </Typography>
          <Typography variant='subtitle1'>+254 720555703</Typography>
        </Grid>
      </Grid>
      <Typography style={{ marginTop: '32px' }} variant='body2' align='center'>
        Created by <Link to='#'>Kymsa Developers</Link> All rights reserved!
      </Typography>
    </footer>
  );
};

export default Footer;
