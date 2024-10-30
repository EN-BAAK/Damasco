import React, { useEffect } from 'react'
import { getItemFromLocalStorage, highlightActiveLink, setAnimation, setItemToLocalStorage } from './misc/helpers'
import { useTranslation } from 'react-i18next'
import Home from './pages/Home'

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

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`App ${i18n.language === "ar" && "arabic"} position-relative`}>
      <Home />
    </div>
  )
}

export default App
