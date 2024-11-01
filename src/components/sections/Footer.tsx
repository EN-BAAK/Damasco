import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../../assets/logo.png"
import { useTranslation } from 'react-i18next'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Footer = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation("global")

  const language = i18n.language === "ar" ? "ar" : "en"
  const links = [
    {
      id: 1,
      text: translating("footer.links.content.home"),
      href: "#hero"
    },
    {
      id: 2,
      text: translating("footer.links.content.about"),
      href: "#about"
    },
    {
      id: 3,
      text: translating("footer.links.content.brands"),
      href: "#brands"
    },
    {
      id: 4,
      text: translating("footer.links.content.services"),
      href: "#services"
    },
    {
      id: 5,
      text: translating("footer.links.content.branches"),
      href: "#branches"
    }
  ];
  const services = [
    {
      id: 1,
      content: translating("footer.services.content.braces"),
    },
    {
      id: 2,
      content: translating("footer.services.content.Instruments"),
    },
    {
      id: 3,
      content: translating("footer.services.content.catheters"),
    },
    {
      id: 4,
      content: translating("footer.services.content.devices"),
    },
    {
      id: 5,
      content: translating("footer.services.content.apparel"),
    },
    {
      id: 6,
      content: translating("footer.services.content.oxygen"),
    }
  ];

  return (
    <section id='footer' className="bg-light">
      <Container>
        <Row className='g-3 text-md-start text-center'>
          <Col
            data-ani={language === "ar" ? "left" : "right"}
            md={6}
            lg={language === "ar" ? { span: 2, offset: 1 } : { span: 2, offset: 0 }}
            className="pe-3 p-sm-1">
            <img
              src={logo}
              alt='logo'
              loading='lazy'
              className='img-fluid' />
          </Col>

          <Col
            data-ani={language === "ar" ? "left" : "right"}
            data-delay="0.6"
            md={6}
            lg={language === "ar" ? { span: 2, offset: 0 } : { span: 2, offset: 1 }}
            className="pe-3 p-sm-1 links">
            <h5 className={`mb-3 fw-semibold ${language === "ar" ? "text-end" : "text-start"}`}>{translating("footer.links.title")}</h5>

            <ul className="m-0 p-0 d-flex flex-column align-items-md-start align-items-center gap-3">
              {links.map(link => <li key={`footer-link-${link.id}`}>
                <a href={link.href} className='d-flex align-items-center gap-1 decoration-none'>
                  {language === "ar" ? <IoIosArrowBack className='d-none d-md-block' /> : <IoIosArrowForward className='d-none d-md-block' />}
                  {link.text}
                </a>
              </li>)}
            </ul>
          </Col>

          <Col
            data-ani={language === "ar" ? "left" : "right"}
            data-delay="0.9"
            md={6}
            lg={2}
            className="pe-3 p-sm-1">
            <h5 className={`mb-3 fw-semibold ${language === "ar" ? "text-end" : "text-start"}`}>{translating("footer.services.title")}</h5>

            <ul className="m-0 p-0 d-flex flex-column align-items-md-start align-items-center gap-3">
              {services.map((service) => (
                <li key={`footer-services-${service.id}`}>
                  <p className='d-flex align-items-center gap-1 m-0'>
                    {language === "ar" ? <IoIosArrowBack className='d-none d-md-block' /> : <IoIosArrowForward className='d-none d-md-block' />}
                    {service.content}
                  </p>
                </li>
              ))}
            </ul>
          </Col>

          <Col
            data-ani={language === "ar" ? "left" : "right"}
            data-delay="1.2"
            lg={{ span: 4, offset: 1 }}
            md={6}
            className="pe-3 p-sm-1"
          >
            <h5 className="mb-5">Our Newsletter</h5>
            <p className="mb-4">
              Tamen quem nulla quae legam multos aute sint
              culpa legam noster magna
            </p>
            <div className="input d-flex overflow-hidden">
              <input type="text" />
              <button type="button">Subscribe</button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Footer
