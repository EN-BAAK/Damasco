import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import i18next from 'i18next'
import { I18nextProvider } from 'react-i18next'
import arLang from "./languages/ar.json"
import enLang from "./languages/en.json"
import frLang from "./languages/fr.json"
import { StrictMode } from 'react'

i18next.init({
  interpolation: { escapeValue: false },
  lng: "en",
  resources: {
    ar: {
      global: arLang
    },
    en: {
      global: enLang
    },
    fr: {
      global: frLang
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <I18nextProvider i18n={i18next}>
    <StrictMode>
      <App />
    </StrictMode>
  </I18nextProvider>
)
