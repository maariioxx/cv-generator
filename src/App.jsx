import { useState } from 'react';
import CVEducation from './components/CVEducation.jsx';
import Form from './components/Form.jsx';
import CVWork from './components/CVWork.jsx';

function App() {
  const [CVData, setCVData] = useState({
    fullName: 'Manolo Juan',
    email: 'manolin@gmail.com',
    phoneNumber: '672134589',
    place: 'Valencia, Spain',
    education: [
      {
        school: 'IES Floridablanca',
        degree: 'Bachillerato',
        startDate: '08/09/2021',
        endDate: '08/05/2023',
        place: 'Murcia, Spain',
      },
    ],
    works: [
      {
        position: 'Junior Front-End Developer',
        company: 'MariscalTV',
        startDate: '08/06/2023',
        endDate: '08/01/2024',
        place: 'Murcia, Spain',
        description:
          'I was a junior on the Front-End developing part of the team',
      },
    ],
  });

  return (
    <>
      <header>
        <h1>cvgenerator</h1>
      </header>
      <main>
        <Form data={CVData} setCVData={setCVData} />
        <div className="cv">
          <div className="top-cv">
            <div className="cv-name">{CVData.fullName}</div>
            <div className="cv-email">{CVData.email}</div>
            <div className="cv-phone">{CVData.phoneNumber}</div>
            <div className="cv-person-place">{CVData.place}</div>
          </div>
          <div className="bottom-cv">
            <div className="education-title">Education</div>
            {CVData.education.map((edu) => {
              return <CVEducation data={edu} key={crypto.randomUUID()} />;
            })}
            {CVData.works.map((work) => {
              return <CVWork data={work} key={crypto.randomUUID()} />;
            })}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
