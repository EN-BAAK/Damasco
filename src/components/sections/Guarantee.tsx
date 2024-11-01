import React from 'react'
import HeadingTitle from '../HeadingTitle'
import { useTranslation } from 'react-i18next'
import { Col, Container, Row } from 'react-bootstrap'
import guaranteeImg from "../../assets/guarantee/alpha-min.png"
import guarantee from "../../config/guarantee.json"
import { BiSolidBookmarkPlus } from "react-icons/bi";
import { useAppContext } from '../../context/AppContext'

const Guarantee = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global")
  const { showImage } = useAppContext()

  const language = i18n.language === "ar" ? "ar" : i18n.language === "en" ? "en" : "fr"

  return (
    <section id='guarantee' className='bg-light'>
      <Container>
        <HeadingTitle
          title={translating("guarantee.title")}
          desc={translating("guarantee.desc")}
        />

        <Row className='align-items-center justify-content-center g-3'>
          <Col lg={12} data-ani="down">
            <p className='fw-semibold fs-5'>{translating("guarantee.guarantee")}</p>
          </Col>
          <Col lg={6} data-ani={language === "ar" ? "left" : "right"}>
            <img
              src={guaranteeImg}
              alt='alpha'
              loading='lazy'
              onClick={() => showImage(guaranteeImg)}
              className='rounded-4' />
          </Col>
          <Col lg={6} data-ani={language === "ar" ? "right" : "left"}>
            <ul className='m-0 px-2 py-4 shadow rounded-4 d-flex flex-column gap-3'>
              {guarantee[language].map(feature => (
                <li key={`guarantee-feature-${feature.id}`} className='fs-6'>
                  <BiSolidBookmarkPlus size={25} />
                  <span className="fw-semibold fs-5 text-black mx-1">
                    {feature.feature}:
                  </span>
                  <span className='text-black-50'>{feature.description}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Guarantee
