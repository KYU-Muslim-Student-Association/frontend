import React from 'react';

const Navigation = React.lazy(() => import('../components/Navigation'));
const Slides = React.lazy(() => import('../components/Swiper'));
const About = React.lazy(() => import('../components/About'));
const Gallery = React.lazy(() => import('../components/Gallery'));
const Scholars = React.lazy(() => import('../components/Scholars'));
const ContactUs = React.lazy(() => import('../components/ContactUs'));
const Footer = React.lazy(() => import('../components/Footer'));
const Blog = React.lazy(() => import('../components/Blog'));
const PrayerTime = React.lazy(() => import('../components/PrayerTime'));
const CalendarEvent = React.lazy(() => import('../components/CalendarEvent'));

const Home = () => {
  return (
    <>
      <Navigation />
      <Slides />
      <About />
      <PrayerTime />
      <Gallery />
      <Scholars />
      <CalendarEvent />
      <Blog />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
