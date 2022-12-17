import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Typography, Box, Button, CssBaseline } from '@mui/material';
import slider1 from '../assets/images/slider1.jpg';
import slider2 from '../assets/images/slider2.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

export default function App() {
  return (
    <>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className='mySwiper'
        style={{ height: '100vh' }}
      >
        <SwiperSlide>
          <img
            src={slider1}
            alt='slider2'
            className='swiper-slide slide'
            style={{ objectFit: 'cover' }}
          />
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%,-50%)`,
              marginTop: 0,
              textAlign:'center'

            }}
          >
            <Typography
              variant='h3'
              color='white'
              sx={{
                marginBottom:'20px',
                textAlign: 'center',
                fontSize: {
                  md: 60,
                  xs: 17,
                },
              }}
            >
              WELCOME TO KYUMSA COMMUNITY
            </Typography>
            <Button variant='contained'>Get Started</Button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider2} alt='slider2' className='swiper-slide slide' />
          <Box
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: `translate(-50%,-50%)`,
              marginTop: 0,
              textAlign:'center'

            }}
          >
            <Typography
              variant='h3'
              color='white'
              sx={{
                marginBottom:'20px',
                textAlign: 'center',
                fontSize: {
                  md: 60,
                  xs: 17,
                },
              }}
            >
              WELCOME TO KYUMSA COMMUNITY
            </Typography>
            <Button variant='contained'>Get Started</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
