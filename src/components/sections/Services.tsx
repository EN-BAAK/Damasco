import React from 'react'
import HeadingTitle from '../HeadingTitle'
import { useTranslation } from 'react-i18next';
import ProductsCard from '../ProductsCard';
import { Col, Container, Row } from 'react-bootstrap';
import service1 from "../../assets/services/corset-min.png"
import services from "../../config/services.json"

const Services = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global");

  const language = i18n.language === "ar" ? "ar" : i18n.language === "en" ? "en" : "fr"
  const images = [service1, service1, service1, service1, service1, service1]

  return (
    <section id='services'>
      <Container>
        <HeadingTitle title={translating("global.services")} desc={translating("services.desc")} />

        <Row className='g-3 align-items-stretch justify-content-center'>
          {
            services[language].map((service, index) =>
              <Col className='d-flex' key={`service-${service.id}`} xs={12} sm={6} lg={4} xl={3} >
                <ProductsCard
                  title={service.title}
                  desc={service.desc}
                  img={images[index]}
                />
              </Col>
            )
          }
        </Row>
      </Container>
    </section>
  )
}

export default Services
