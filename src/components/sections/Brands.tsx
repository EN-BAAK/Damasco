import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';

import threeM from "../../assets/brands/3M-min.png";
import accu from "../../assets/brands/accu-min.png";
import alpk2 from "../../assets/brands/alpk2-min.png";
import boso from "../../assets/brands/boso-min.png";
import braun from "../../assets/brands/braun-min.png";
import coloplast from "../../assets/brands/coloplast-min.png";
import contour from "../../assets/brands/contour-min.png";
import evon from "../../assets/brands/evon-min.png";
import litman from "../../assets/brands/litman-min.png";
import maxell from "../../assets/brands/maxell-min.png";
import mdf from "../../assets/brands/mdf-min.png";
import rossmax from "../../assets/brands/rossmax-min.png";
import toshoba from "../../assets/brands/toshiba-min.png";
import tynor from "../../assets/brands/tynor-min.png";
import yuwell from "../../assets/brands/yuwell-min.png";
import glu from "../../assets/brands/glu.png";
import dura from "../../assets/brands/dura.png";
import { useAppContext } from '../../context/AppContext';

const Brands = (): React.JSX.Element => {
  const { t: translating } = useTranslation('global');
  const { showImage } = useAppContext()

  const brandImages = [
    { id: 1, src: threeM, alt: '3M' },
    { id: 2, src: accu, alt: 'Accu' },
    { id: 3, src: alpk2, alt: 'Alpk2' },
    { id: 4, src: boso, alt: 'Boso' },
    { id: 5, src: braun, alt: 'Braun' },
    { id: 6, src: coloplast, alt: 'Coloplast' },
    { id: 7, src: contour, alt: 'Contour' },
    { id: 8, src: evon, alt: 'Evon' },
    { id: 9, src: litman, alt: 'Litman' },
    { id: 10, src: maxell, alt: 'Maxell' },
    { id: 11, src: mdf, alt: 'MDF' },
    { id: 12, src: rossmax, alt: 'Rossmax' },
    { id: 13, src: toshoba, alt: 'Toshiba' },
    { id: 14, src: tynor, alt: 'Tynor' },
    { id: 15, src: yuwell, alt: 'Yuwell' },
    { id: 16, src: glu, alt: 'GLU' },
    { id: 17, src: dura, alt: 'Dura' }
  ];
  return (
    <section id="brands">
      <Container>
        <HeadingTitle
          title={translating('global.brands')}
          desc={translating('brands.title')}
        />

        <div className="swiper-container">
          <Slider
            speed={500}
            nextArrow={<></>}
            prevArrow={<></>}
            initialSlide={0}
            slidesToShow={7}
            slidesToScroll={4}
            infinite={false}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 7,
                  slidesToScroll: 2,
                  initialSlide: 7
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 6,
                  slidesToScroll: 2,
                  initialSlide: 6
                },
              },
              {
                breakpoint: 0,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 2,
                  initialSlide: 4
                },
              },
            ]}>
            {
              brandImages.map((brand, index) => (
                <div key={`brand-img-${brand.id}`}>
                  <img
                    onClick={() => showImage(brand.src)}
                    data-ani="bomb"
                    data-delay={`${index * 0.05}`}
                    src={brand.src}
                    alt={brand.alt}
                    loading='lazy' />
                </div>
              ))
            }
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Brands;