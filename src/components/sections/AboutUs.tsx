import React from 'react'
import HeadingTitle from '../HeadingTitle'
import { useTranslation } from 'react-i18next';
import { Container, Row } from 'react-bootstrap';
import AboutImg from "../../assets/about.jpg"
import { useAppContext } from '../../context/AppContext';

const AboutUs = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global");
  const { showImage } = useAppContext()

  const arStyle = i18n.language === 'ar' ? "ar" : "en"
  const isArabic = i18n.language === 'ar';

  return (
    <section id='about'>
      <Container>
        <HeadingTitle
          title={translating("global.about-us")}
        />

        <Row className={`align-items-center ${arStyle}`}>
          <div
            className={`img-holder col-lg-6 col-12 ${arStyle}`}
            data-ani={isArabic ? "left" : "right"}
          >
            <img
              onClick={() => showImage(AboutImg)}
              src={AboutImg}
              className='img-fluid'
              loading='lazy'
              alt='about-img' />
          </div>
          <div
            className={`col-lg-6 col-12 m-0 ${arStyle}`}
            data-ani={isArabic ? "right" : "left"}
          >
            <p className={`${arStyle}`}>
              {translating("about.paragraph1")}
              <span className='sentence'>{translating("about.sentence")}</span>
              {translating("about.paragraph2")}
            </p>
            <p className={`${arStyle}`}>
              {translating("about.paragraph3")}
            </p>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default AboutUs
