import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Contents from '../components/Contents'
import OurProducts from '../components/OurProducts'
import Gallery from '../components/Gallery'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Contents />
      <OurProducts />
      <Gallery />
      <Footer />
    </>
  )
}

export default Home