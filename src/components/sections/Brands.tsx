import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';

import threeM from "../../assets/3M-min.png";
import accu from "../../assets/accu-min.png";
import alpk2 from "../../assets/alpk2-min.png";
import boso from "../../assets/boso-min.png";
import braun from "../../assets/braun-min.png";
import coloplast from "../../assets/coloplast-min.png";
import contour from "../../assets/contour-min.png";
import evon from "../../assets/evon-min.png";
import litman from "../../assets/litman-min.png";
import maxell from "../../assets/maxell-min.png";
import mdf from "../../assets/mdf-min.png";
import rossmax from "../../assets/rossmax-min.png";
import toshoba from "../../assets/toshiba-min.png";
import tynor from "../../assets/tynor-min.png";
import yuwell from "../../assets/yuwell-min.png";
import glu from "../../assets/glu.png";
import dura from "../../assets/dura.png";

const Brands = (): React.JSX.Element => {
  const { t: translating } = useTranslation('global');

  const brandImages = [
    { src: threeM, alt: '3M' },
    { src: accu, alt: 'Accu' },
    { src: alpk2, alt: 'Alpk2' },
    { src: boso, alt: 'Boso' },
    { src: braun, alt: 'Braun' },
    { src: coloplast, alt: 'Coloplast' },
    { src: contour, alt: 'Contour' },
    { src: evon, alt: 'Evon' },
    { src: litman, alt: 'Litman' },
    { src: maxell, alt: 'Maxell' },
    { src: mdf, alt: 'MDF' },
    { src: rossmax, alt: 'Rossmax' },
    { src: toshoba, alt: 'Toshiba' },
    { src: tynor, alt: 'Tynor' },
    { src: yuwell, alt: 'Yuwell' },
    { src: glu, alt: 'GLU' },
    { src: dura, alt: 'Dura' }
  ];

  return (
    <section id="brands">
      <Container>
        <HeadingTitle
          title={translating('global.brands')}
          desc={translating('brands.title')}
        />

        <Row className='g-5'>
          {brandImages.map((brand, index) => (
            <Col key={index} xs={6} sm={4} md={3} lg={2} data-ani='bomb'>
              <img src={brand.src} alt={brand.alt} loading='lazy' />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Brands;