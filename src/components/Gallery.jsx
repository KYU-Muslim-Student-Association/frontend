import React from 'react';
import Gallery2 from '../assets/images/gallery2.jpg';
import Gallery1 from '../assets/images/gallery1.jpg';
import Gallery3 from '../assets/images/gallery3.jpg';
import Gallery4 from '../assets/images/gallery4.jpg';
import Gallery5 from '../assets/images/gallery5.jpg';
import Gallery6 from '../assets/images/gallery6.jpg';
import { Grid } from '@mui/material';

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };
  return (
    <>
      <h1 className='heading'>
        our <span> gallery</span>
      </h1>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames='lightbox'
      >
        <a href={Gallery2} className='column' style={{ display: 'grid' }}>
          <img src={Gallery2} alt='' style={{height:'100%', width:'100%' , objectFit:'cover'}} />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery3} className='column'>
          <img src={Gallery3} alt='' style={{height:'100%', width:'100%' , objectFit:'cover'}} />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery4} className='column'>
          <img src={Gallery4} alt='' style={{height:'100%', width:'100%' , objectFit:'cover'}} />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery5} className='column'>
          <img src={Gallery5} alt='' style={{height:'100%', width:'100%' , objectFit:'cover'}}/>
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery6} className='column'>
          <img src={Gallery6} alt='' style={{height:'100%', width:'100%' , objectFit:'cover'}} />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>

        <a href={Gallery1} className='column'>
          <img src={Gallery1} alt='' style={{height:'100%', width:'100%' , objectFit:'cover'}} />
          <div className='icons'>
            <i className='fas fa-plus'></i>
          </div>
        </a>
      </LightGallery>
    </>
  );
};

export default Gallery;
