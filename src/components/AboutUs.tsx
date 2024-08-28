import React from 'react'
import HeadingTitle from './HeadingTitle'
import { useTranslation } from 'react-i18next';
import { Container, Row } from 'react-bootstrap';
import AboutImg from "../assets/about.jpg"

const AboutUs = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global");
  const arStyle = i18n.language === 'ar' ? "ar" : "en"
  const isArabic = i18n.language === 'ar';

  return (
    <section id='about'>
      <HeadingTitle
        title={translating("global.about-us")}
      />

      <Container>
        <Row className='align-items-center'>
          <div
            className={`img-holder col-lg-6 col-12 ${arStyle}`}
            data-ani={isArabic ? "left" : "right"}
          >
            <img src={AboutImg} className='img-fluid' />
          </div>
          <p
            className={`col-lg-6 col-12 m-0 ${arStyle}`}
            data-ani={isArabic ? "right" : "left"}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error sit deleniti in libero, itaque culpa earum? Quaerat ratione laboriosam omnis perspiciatis ea. Quasi minus nisi odio repellat nam, vitae facilis impedit cum libero modi corrupti magni ipsum natus voluptates qui quas iste, necessitatibus nemo. Nostrum ea molestiae harum id!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error sit deleniti in libero, itaque culpa earum? Quaerat ratione laboriosam omnis perspiciatis ea. Quasi minus nisi odio repellat nam, vitae facilis impedit cum libero modi corrupti magni ipsum natus voluptates qui quas iste, necessitatibus nemo. Nostrum ea molestiae harum id!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus error sit deleniti in libero, itaque culpa earum? Quaerat ratione laboriosam omnis perspiciatis ea. Quasi minus nisi odio repellat nam, vitae facilis impedit cum libero modi corrupti magni ipsum natus voluptates qui quas iste, necessitatibus nemo. Nostrum ea molestiae harum id!
          </p>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
