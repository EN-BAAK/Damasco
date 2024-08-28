import React, { useEffect } from 'react'
import HeaderBar from './components/HeaderBar'
import TopBar from './components/TopBar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import Brands from './components/Brands'
import Contact from './components/Contact'
import { setAnimation } from './misc/helpers'
import { useTranslation } from 'react-i18next'

const App = (): React.JSX.Element => {
  const i18n = useTranslation("global")[1]

  useEffect(() => {
    setAnimation()

    const topBar = document.getElementById("topbar");
    const header = document.getElementById('header');

    if (topBar && header) {
      addEventListener("scroll", () => {
        setAnimation()

        if (window.scrollY >= 200) {
          topBar.classList.add("scrolled");
          header.classList.add("scrolled");
        } else {
          topBar.classList.remove("scrolled");
          header.classList.remove("scrolled");
        }
      })
    }

  }, [])

  return (
    <div className={`App ${i18n.language === "ar" && "arabic"}`}>
      <TopBar />
      <HeaderBar />

      <Hero />
      <AboutUs />
      <Brands />
      <Contact />
    </div>
  )
}

export default App
