import CVEducation from './CVEducation';
import CVWork from './CVWork';
import { MdLocalPhone, MdEmail, MdLocationOn } from 'react-icons/md';

function CV({ CVData }) {
  return (
    <div className="cv">
      <div className="top-cv">
        <div className="cv-name">{CVData.fullName}</div>
        <div className="cv-top-data">
          <div className="cv-email">
            <MdEmail className="cv-top-data-icon" />
            {CVData.email}
          </div>
          <div className="cv-phone">
            <MdLocalPhone className="cv-top-data-icon" />
            {CVData.phoneNumber}
          </div>
          <div className="cv-person-place">
            <MdLocationOn className="cv-top-data-icon" />
            {CVData.place}
          </div>
        </div>
      </div>
      <div className="bottom-cv">
        <div className="bottom-cv-title">Education</div>
        <div className="education">
          {CVData.education.map((edu) => {
            return <CVEducation data={edu} key={crypto.randomUUID()} />;
          })}
        </div>
        <div className="bottom-cv-title">Works</div>
        <div className="work">
          {CVData.works.map((work) => {
            return <CVWork data={work} key={crypto.randomUUID()} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default CV;
