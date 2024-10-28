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
      <Contact />
    </div>
  )
}

export default Home
