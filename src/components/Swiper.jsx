import React from 'react';
import { Typography } from '@mui/material';
import Test from '../assets/test.jpg';
import { Container } from '@mui/system';

const styles = {
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'black',
    color: 'primary.contrastText',
    position: 'relative',
    boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.5)',
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '100%',
    opacity: '0.4',
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
    fontFamily: 'Fjalla One sans-serif',
    textRendering: 'optimizeLegibility',
    fontWeight: '600',
  },

  icon: {
    width: '100%',
    height: 'auto',
    maxWidth: '600px',
  },
};

export default function Hero() {
  return (
    <div style={styles.root}>
      <img src={Test} style={styles.image} alt='Hero' />
      <div style={styles.container}>
        <Container>
          <img
            class='hero__image-above-heading fade-in mx-auto mb-3 lazyautosizes ls-is-cached lazyloaded'
            src='//cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_300x.webp?v=1660863167'
            data-widths='[540, 720, 900, 1080, 1296, 1512, 1728, 1944, 2048, 4472]'
            data-aspectratio='6.35609756097561'
            data-sizes='auto'
            data-parent-fit='cover'
            data-hero-image=''
            alt=''
            style={styles.icon}
            data-srcset='//cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_540x.webp?v=1660863167 540w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_720x.webp?v=1660863167 720w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_900x.webp?v=1660863167 900w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1080x.webp?v=1660863167 1080w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1296x.webp?v=1660863167 1296w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1512x.webp?v=1660863167 1512w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1728x.webp?v=1660863167 1728w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1944x.webp?v=1660863167 1944w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_2048x.webp?v=1660863167 2048w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_4472x.webp?v=1660863167 4472w'
            sizes='604.8146341463425px'
            srcSet='//cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_540x.webp?v=1660863167 540w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_720x.webp?v=1660863167 720w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_900x.webp?v=1660863167 900w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1080x.webp?v=1660863167 1080w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1296x.webp?v=1660863167 1296w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1512x.webp?v=1660863167 1512w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1728x.webp?v=1660863167 1728w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_1944x.webp?v=1660863167 1944w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_2048x.webp?v=1660863167 2048w, //cdn.shopify.com/s/files/1/0609/7826/6347/files/bismillah_white_4472x.webp?v=1660863167 4472w'
          />
        </Container>

        <Typography
          variant='h5'
          color='#EAC533'
          textTransform='uppercase'
          my={2}
        >
          Kirinyaga University
        </Typography>
        <Typography
          sx={{ typography: { xs: '40px', md: 'h2' } }}
          color='#EAC533'
          style={styles.text}
        >
          Muslim's Student Association
        </Typography>
      </div>
    </div>
  );
}
