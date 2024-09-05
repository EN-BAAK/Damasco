import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import LanguageBox from '../LanguageBox';

const HeaderBar = (): React.JSX.Element => {
  const [active, setActive] = useState<boolean>(false)

  const { t: translating, i18n } = useTranslation("global");

  return (
    <header id='header'>
      <Container className={`d-flex align-items-center pt-3 pb-3`}>
        <div className={`logo ${i18n.language === 'ar' && "arabic"}`}>
          {translating("global.damasco")}
        </div>

        <Navbar className='order-md-0 order-last position-static pe-md-4'>
          <ul className={`m-0 p-0 ${active && "active"}`}>
            <li>
              <a className='active text-uppercase' href='#hero'>
                {translating("global.home")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#about'>
                {translating("global.about")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#brands'>
                {translating("global.brands")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#services'>
                {translating("global.services")}
              </a>
            </li>
            <li>
              <a className='text-uppercase' href='#branches'>
                {translating("global.branches")}
              </a>
            </li>
          </ul>

          <div
            id="bar"
            className={`d-block d-md-none ${active && "active"}`}
            onClick={() => setActive(!active)}
          >
            <span className="top"></span>
            <span className="mid"></span>
            <span className="bottom"></span>
          </div>
        </Navbar>

        <a href='#contact' className='contact-btn'>
          <button className='text-nowrap'>{translating("global.contact")}</button>
        </a>

        <div className={`${i18n.language !== 'ar' ? "me-2 me-md-0 ms-2" : "ms-2 ms-md-0 me-2"}`}>
          <LanguageBox />
        </div>
      </Container>
    </header>
  );
}

export default HeaderBar;