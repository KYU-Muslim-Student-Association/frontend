import React from 'react';
import Gallery2 from '../assets/images/gallery2.jpg';
import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery3 from '../assets/images/gallery3.jpg';
import Gallery4 from '../assets/images/gallery4.jpg';
import Gallery5 from '../assets/images/gallery5.jpg';
import Gallery6 from '../assets/images/gallery6.jpg';

import LightGallery from 'lightgallery/react';
import Typography from '@mui/material/Typography';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import { Box } from '@mui/material';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <Box mb={5} id='gallery'>
      <Typography variant='h2' className='heading' sx={{fontWeight:'900'}}>
        our <span> gallery</span>
      </Typography>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames='lightbox'
      >
        <a href={Gallery2} className='column' style={{ display: 'grid' }}>
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
      </LightGallery>
    </Box>
  );
};

export default Gallery;
