import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
import { branches } from '../../misc/global';
import { FaMapLocationDot } from 'react-icons/fa6';
import Img from "../../assets/about.jpg"

const Branches = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation('global');
  const [selectedBranchIndex, setSelectedBranchIndex] = useState(0);

  const handleBranchClick = (index: number) => {
    setSelectedBranchIndex(index);
  };

  return (
    <section id="branches">
      <Container>
        <HeadingTitle title={translating('global.branches')} desc={translating('branches.desc')} />

        <div className="card" style={{ backgroundImage: `url(${Img})` }}>
          <div className={`branches d-flex align-items-center ${i18n.language === 'ar' ? 'ar' : ''}`}>
            {branches.map((branch, index) => (
              <h5
                key={index}
                onClick={() => handleBranchClick(index)}
                className={index === selectedBranchIndex ? 'active' : ''}
              >
                {branch}
              </h5>
            ))}
          </div>
        </div>

        <div className="window" data-ani="up-big">
          <h1 className="fw-bold">{translating(`branches.branch${selectedBranchIndex + 1}.title`)}</h1>
          <p className="fs-5 fw-normal">{translating(`branches.branch${selectedBranchIndex + 1}.address`)}</p>
          <div className="map-icon-holder">
            <FaMapLocationDot />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Branches;