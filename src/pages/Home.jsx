import React from 'react';
import About from '../components/About';
import Navigation from '../components/Navigation';
import Slides from '../components/Swiper';
import Gallery from '../components/Gallery';
import Scholars from '../components/Scholars';




const Home = () => {

  return (
    <>
      <Navigation />
      <Slides />
      <About />
      <Gallery />
      <Scholars />
    </>
  );
};

export default Home;
