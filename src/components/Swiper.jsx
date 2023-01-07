import React from 'react';
import { Typography } from '@mui/material';
import Slider from '../assets/one.jpg'

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
    backgroundColor: 'primary',
    color: 'primary.contrastText',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
  },
  text: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: `translate(-50%,-50%)`,
    textAlign: 'center',
    color:'white'
  },
};

export default function Hero() {
  return (
    <div style={styles.root}>
      <img
        src={Slider}
        style={styles.image}
        alt='Hero'
      />
      <Typography variant='h2' style={styles.text}>
        KyUMSA Community
      </Typography>
    </div>
  );
}
