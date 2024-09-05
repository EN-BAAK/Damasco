import React from 'react'
import HeadingTitle from '../HeadingTitle'
import { useTranslation } from 'react-i18next';
import ProductsCard from '../ProductsCard';
import { Col, Container, Row } from 'react-bootstrap';

const Services = (): React.JSX.Element => {
  const { t: translating } = useTranslation("global");

  return (
    <section id='services'>
      <Container>
        <HeadingTitle title={translating("global.services")} desc={translating("services.desc")} />

        <Row className='g-3'>
          <Col xs={12} md={6} lg={3} >
            <ProductsCard />
          </Col>

          <Col xs={12} md={6} lg={3} >
            <ProductsCard />
          </Col>

          <Col xs={12} md={6} lg={3} >
            <ProductsCard />
          </Col>

          <Col xs={12} md={6} lg={3}>
            <ProductsCard />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Services
