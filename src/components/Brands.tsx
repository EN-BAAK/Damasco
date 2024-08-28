import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import HeadingTitle from './HeadingTitle'
import { useTranslation } from 'react-i18next';

import threeM from "../assets/3M-min.png"
import accu from "../assets/accu-min.png"
import alpk2 from "../assets/alpk2-min.png"
import boso from "../assets/boso-min.png"
import braun from "../assets/braun-min.png"
import coloplast from "../assets/coloplast-min.png"
import contour from "../assets/contour-min.png"
import evon from "../assets/evon-min.png"
import litman from "../assets/litman-min.png"
import maxell from "../assets/maxell-min.png"
import mdf from "../assets/mdf-min.png"
import rossmax from "../assets/rossmax-min.png"
import toshoba from "../assets/toshiba-min.png"
import tynor from "../assets/tynor-min.png"
import yuwell from "../assets/yuwell-min.png"


const Brands = (): React.JSX.Element => {
  const { t: translating } = useTranslation("global");

  return (
    <section id="brands">
      <HeadingTitle
        title={translating("global.brands")}
        desc={translating("brands.title")}
      />

      <Container>
        <Row className='g-5'>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={threeM} alt="3M" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={accu} alt="Accu" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={alpk2} alt="Alpk2" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={boso} alt="Boso" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={braun} alt="Braun" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={coloplast} alt="Coloplast" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={contour} alt="Contour" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={evon} alt="Evon" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={litman} alt="Litman" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={maxell} alt="Maxell" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={mdf} alt="MDF" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={rossmax} alt="Rossmax" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={toshoba} alt="Toshiba" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={tynor} alt="Tynor" />
          </Col>
          <Col xs={6} sm={4} md={3} lg={2} data-ani="bomb">
            <img src={yuwell} alt="Yuwell" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Brands
