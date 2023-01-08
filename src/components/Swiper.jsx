import React from 'react';
import { Typography } from '@mui/material';
import Slider from '../assets/one.jpg';


const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    backgroundColor: 'primary',
    color: 'primary.contrastText',
    position: 'relative',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%,-50%)`,
    textAlign: 'center',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  text: {
    color: 'white',
  },
  icon: {
    width: '500px',
    height: '500px',
  },
};

export default function Hero() {
  return (
    <div style={styles.root}>
      <img src={Slider} style={styles.image} alt='Hero' />
      <div style={styles.container}>
        <Typography variant='h2' style={styles.text} sx={{fontWeight:'900'}}>
          KyUMSA COMMUNITY
        </Typography>
      </div>
    </div>
  );
}
