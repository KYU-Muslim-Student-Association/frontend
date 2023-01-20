import React from 'react';
import Gallery1 from '../assets/events/event3.jpeg';
import Gallery2 from '../assets/events/event9.jpeg';
import Gallery3 from '../assets/events/event8.jpeg';
import Gallery4 from '../assets/events/event4.jpeg';
import Gallery5 from '../assets/events/event10.jpeg';
import Gallery6 from '../assets/events/event7.jpeg';

import LightGallery from 'lightgallery/react';
import Typography from '@mui/material/Typography';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import {  Container } from '@mui/material';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <Container mb={5} id='gallery' maxWidth='xl'>
      <Typography variant='h2' className='heading' sx={{fontWeight:'900'}}>
        our <span> gallery</span>
      </Typography>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames='lightbox'
      >
        <a href={Gallery1} className='column'>
          <img
            src={Gallery1}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery2} className='column'>
          <img
            src={Gallery2}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery3} className='column'>
          <img
            src={Gallery3}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery4} className='column'>
          <img
            src={Gallery4}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery5} className='column'>
          <img
            src={Gallery5}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery6} className='column'>
          <img
            src={Gallery6}
            alt=''
            style={{ height: '100%', width: '100%', objectFit: 'cover' }}
          />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>
      </LightGallery>
    </Container>
  );
};

export default Gallery;
