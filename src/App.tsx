import React, { useEffect } from 'react'
import HeaderBar from './components/sections/HeaderBar'
import TopBar from './components/sections/TopBar'
import Hero from './components/sections/Hero'
import AboutUs from './components/sections/AboutUs'
import Brands from './components/sections/Brands'
import Contact from './components/sections/Contact'
import { getItemFromLocalStorage, highlightActiveLink, setAnimation, setItemToLocalStorage } from './misc/helpers'
import { useTranslation } from 'react-i18next'
import Cta from './components/Cta'
import Services from './components/sections/Services'
import Branches from './components/sections/Branches'

const App = (): React.JSX.Element => {
  const i18n = useTranslation("global")[1]

  useEffect(() => {
    let currentLang = getItemFromLocalStorage("lang") || navigator.language
    const supportedLanguages = ["ar", "en", "fr"];
    if (!supportedLanguages.includes(currentLang)) {
      currentLang = "en";
    }

    if (currentLang) {
      i18n.changeLanguage(currentLang)
      setItemToLocalStorage("lang", currentLang)
    }
  }, [])

  useEffect(() => {
    const links = document.querySelectorAll<HTMLAnchorElement>("#header nav ul li a");
    const topBar = document.getElementById("topbar");
    const header = document.getElementById("header");

    const handleScroll = () => {
      setAnimation();

      if (links.length > 0) {
        highlightActiveLink(Array.from(links));
      }

      if (window.scrollY >= 200) {
        topBar?.classList.add("scrolled");
        header?.classList.add("scrolled");
      } else {
        topBar?.classList.remove("scrolled");
        header?.classList.remove("scrolled");
      }
    };

    handleScroll(); // Initial call

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${i18n.language === "ar" && "arabic"}`}>
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

export default App
