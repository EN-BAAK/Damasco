import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Container } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
import 'swiper/css';
import "swiper/css/scrollbar";

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
          <Swiper
            spaceBetween={20}
            initialSlide={8}
            slidesPerView={8}
            loop={false}
            breakpoints={{
              1024: {
                slidesPerView: 8,
              },
              768: {
                slidesPerView: 6,
              },
              0: {
                slidesPerView: 4,
              }
            }}
          >
            {
              brandImages.map(brand => (
                <SwiperSlide key={brand.id}>
                  <img src={brand.src} alt={brand.alt} loading='lazy' />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </Container>
    </section>
  );
};

export default Brands;