import React from 'react'
import HeadingTitle from '../HeadingTitle'
import { useTranslation } from 'react-i18next'
import image from "../../assets/gallery/image-min.png"
import image1 from "../../assets/gallery/image-1-min.png"
import image2 from "../../assets/gallery/image-2-min.png"
import image3 from "../../assets/gallery/image-3-min.png"
import image4 from "../../assets/gallery/image-4-min.png"
import image5 from "../../assets/gallery/image-5-min.png"
import image6 from "../../assets/gallery/image-6-min.png"
import image7 from "../../assets/gallery/image-7-min.png"
import image8 from "../../assets/gallery/image-8-min.png"
import image9 from "../../assets/gallery/image-9-min.png"
import Slider from 'react-slick'
import { Container } from 'react-bootstrap'
import { useAppContext } from '../../context/AppContext'

const Gallery = (): React.JSX.Element => {
  const { t: translating } = useTranslation("global")
  const { showImage } = useAppContext()

  const images = [
    { id: 1, src: image, alt: 'Image Min' },
    { id: 2, src: image1, alt: 'Image 1' },
    { id: 3, src: image2, alt: 'Image 2' },
    { id: 4, src: image3, alt: 'Image 3' },
    { id: 5, src: image4, alt: 'Image 4' },
    { id: 6, src: image5, alt: 'Image 5' },
    { id: 7, src: image6, alt: 'Image 6' },
    { id: 8, src: image7, alt: 'Image 7' },
    { id: 9, src: image8, alt: 'Image 8' },
    { id: 10, src: image9, alt: 'Image 9' },
  ];

  return (
    <section id='gallery'>
      <Container>
        <HeadingTitle title={translating("gallery.title")} />

        <div className="swiper-container">
          <Slider
            speed={500}
            nextArrow={<></>}
            prevArrow={<></>}
            initialSlide={0}
            slidesToShow={5}
            slidesToScroll={1}
            infinite={true}
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 5,
                  slidesToScroll: 1,
                  initialSlide: 5
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  initialSlide: 3
                },
              },
              {
                breakpoint: 0,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 1
                },
              },
            ]}>
            {
              images.map((img, index) => (
                <div
                  className='img-holder position-relative border border-4 border-light-subtle shadow-lg overflow-hidden'
                  key={`img-${img.id}`}
                  onClick={() => showImage(img.src)}
                >
                  <img
                    data-ani="bomb"
                    data-delay={`${index * 0.05}`}
                    src={img.src}
                    loading='lazy'
                    alt={img.alt} />
                </div>
              ))
            }
          </Slider>
        </div>
      </Container>
    </section>
  )
}

export default Gallery
