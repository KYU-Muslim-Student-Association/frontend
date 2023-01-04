import React from 'react';
import About from '../components/About';
import Navigation from '../components/Navigation';
import Slides from '../components/Swiper';
import Gallery from '../components/Gallery';
import Scholars from '../components/Scholars';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';
import Blog from '../components/Blog';

const Home = () => {
  return (
    <>
      <Navigation />
      <Slides />
      <About />
      <Gallery />
      <Scholars />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
