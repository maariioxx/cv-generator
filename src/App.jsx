import { useState } from 'react';
import Form from './components/Form.jsx';
import CV from './components/CV.jsx';

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
      {
        school: 'IES Floridablanc',
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
        <h1>
          <span>cv</span>generator
        </h1>
      </header>
      <main>
        <Form CVData={CVData} setCVData={setCVData} />
        <CV CVData={CVData} />
      </main>
    </>
  );
}

export default App;
