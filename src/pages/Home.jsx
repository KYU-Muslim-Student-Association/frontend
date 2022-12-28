import React from 'react'
import About from '../components/About'
import Navigation from '../components/Navigation'
import Slides from '../components/Swiper'

const Home = () => {
  return (
    <>
      <Navigation />
      <Slides />
      <About />
    </>
  )
}

export default Home