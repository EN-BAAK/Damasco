import React from 'react'
import TopBar from '../components/sections/TopBar'
import HeaderBar from '../components/sections/HeaderBar'
import Hero from '../components/sections/Hero'
import AboutUs from '../components/sections/AboutUs'
import Cta from '../components/Cta'
import Brands from '../components/sections/Brands'
import Services from '../components/sections/Services'
import Branches from '../components/sections/Branches'
import Contact from '../components/sections/Contact'
import Gallery from '../components/sections/Gallery'

const Home = (): React.JSX.Element => {
  return (
    <div>
      <TopBar />
      <HeaderBar />

      <Hero />
      <AboutUs />
      <Cta />
      <Brands />
      <Services />
      <Branches />
      <Gallery />
      <Contact />
    </div>
  )
}

export default Home
