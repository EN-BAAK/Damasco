import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
import { FaMapLocationDot } from 'react-icons/fa6';
import Img from "../../assets/about.jpg"
import branches from "../../config/branches.json"

const Branches = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation('global');
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);

  const handleBranchClick = (index: number) => {
    setSelectedBranchIndex(index);
  };

  const language = i18n.language === "ar" ? "ar" : "en"

  return (
    <section id="branches">
      <Container>
        <HeadingTitle title={translating('global.branches')} desc={translating('branches.desc')} />

        <div 
        className={`branches d-flex align-items-center flex-wrap ${i18n.language === 'ar' ? 'ar' : ''}`}
        data-ani="down"
        >
          {branches[language].map((branch, index) => (
            <h5
              key={index}
              onClick={() => handleBranchClick(index)}
              className={index === selectedBranchIndex ? 'active' : ''}
            >
              {branch}
            </h5>
          ))}
        </div>

        <div className="card" style={{ backgroundImage: `url(${Img})` }} />

        <div className="window" data-ani="popup-up">
          <h1 className="fw-bold">{translating(`branches.branch${selectedBranchIndex + 1}.title`)}</h1>
          <p className="fs-5 fw-normal">{translating(`branches.branch${selectedBranchIndex + 1}.address`)}</p>
          <div className="map-icon-holder rounded-pill mx-auto my-5 px-5 py-2 fs-6 text-white">
            {translating("branches.map")}
            <FaMapLocationDot className='me-2' />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Branches;