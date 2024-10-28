import React from 'react';
import { Container } from 'react-bootstrap';
import HeadingTitle from '../HeadingTitle';
import { useTranslation } from 'react-i18next';
// import { FaMapLocationDot } from 'react-icons/fa6';
import branches from "../../config/branches.json"
import Branch from '../Branch';

const Branches = (): React.JSX.Element => {
  const { t: translating, i18n } = useTranslation('global');
  const language = i18n.language === "ar" ? "ar" : i18n.language === "en" ? "en" : "fr"

  return (
    <section id="branches" className='overflow-hidden'>
      <Container>
        <HeadingTitle title={translating('global.branches')} desc={translating('branches.desc')} />

        <div className="branches-container position-relative w-100">
          {
            branches[language].map(branchGroup =>
              <React.Fragment key={`{branch-group-${branchGroup.id}}`}>
                <span className="location fs-6 d-block my-1 mx-auto px-3 py-1 fw-bold">{branchGroup.location}</span>

                <div className="clear" />

                {
                  branchGroup.branches.map(branch =>
                    <React.Fragment key={`branch-${branch.id}`}>
                      <Branch
                        title={branch.title && branch.title}
                        address={branch.address}
                        phone={branch.phone}
                        telephone={branch.telephone}
                        side={!(branch.id % 2 === 0) && !(branchGroup.id % 3 === 0)}
                        animationDelay={(branchGroup.id + branch.id) * 0.12}
                      />
                      <div className="clear" />
                    </React.Fragment>
                  )
                }
              </React.Fragment>
            )
          }
        </div>

      </Container>
    </section>
  );
};

export default Branches;

{/* <div 
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
        </div> */}