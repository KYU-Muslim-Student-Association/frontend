
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography, Box, Button } from '@mui/material';
import slider1 from '../assets/three.jpg';
import slider2 from '../assets/one.jpg';

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
            sx ={{
              width: {
                xs: '90%', // theme.breakpoints.up('xs')
                sm: '80%', // theme.breakpoints.up('sm')
                md: '60%', // theme.breakpoints.up('md')
                // theme.breakpoints.up('xl')
              },
            }}
            style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: `translate(-50%,-50%)`,
              marginTop: 0,
              textAlign:'center',

            }}
          >
            <Typography
              variant='h3'
              color='white'
              sx={{
                marginBottom:'20px',
                textAlign: 'center',
                typography: {md:'h2',sm: 'h4', xs:'h4'},
                fontWeight:'bolder'
              }}
            >
              WELCOME TO KYUMSA COMMUNITY
            </Typography>
            <Button variant='contained' sx={{ bgcolor:'#c98d83'}}>Get Started</Button>
          </Box>
        </SwiperSlide>

        <SwiperSlide>
          <img src={slider2} alt='slider2' className='swiper-slide slide' />
          <Box
            style={{
              position: 'absolute',
              top: '45%',
              left: '50%',
              transform: `translate(-50%,-50%)`,
              marginTop: 0,
              textAlign:'center',
              width:{xs:100}
              

            }}
          >
            <Typography
              variant='h3'
              color='white'
              sx={{
                marginBottom:'20px',
                textAlign: 'center',
                typography: {md:'h2',sm: 'h4', xs:'h4'}
              }}
            >
              WELCOME TO KYUMSA COMMUNITY
            </Typography>
            <Button variant='contained' sx={{bgcolor:'#c98d83'}}>Get Started</Button>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
