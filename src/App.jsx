import { useState } from 'react';
import Form from './components/Form.jsx';
import CV from './components/CV.jsx';

function App() {
  const [CVData, setCVData] = useState({
    fullName: 'John Jones',
    email: 'example@gmail.com',
    phoneNumber: '672134589',
    place: 'Example, Examplelandia',
    education: [
      {
        school: 'Example',
        degree: 'Example',
        startDate: '08/09/2021',
        endDate: '08/05/2023',
        place: 'Example, Spain',
      },
      {
        school: 'Example',
        degree: 'Example',
        startDate: '08/09/2021',
        endDate: '08/05/2023',
        place: 'Example, Spain',
      },
    ],
    works: [
      {
        position: 'Junior Front-End Developer',
        company: 'Example',
        startDate: '08/06/2023',
        endDate: '08/01/2024',
        place: 'Example, Spain',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra nulla nisi, in dignissim nisl maximus mattis. Morbi eleifend tristique fermentum. Duis at nulla iaculis, fermentum dolor malesuada, feugiat lorem. Nam sagittis facilisis ex, dignissim viverra nisi vestibulum eget. Nulla ipsum augue, imperdiet ut sapien et, sollicitudin blandit mauris. Sed faucibus nibh at posuere finibus. Nullam vulputate ante elit, varius pulvinar nisl vehicula eget. Mauris iaculis non erat nec dictum. Curabitur ullamcorper elit aliquam, pellentesque nunc eu, sagittis nunc. Donec vel lacinia sem, vel convallis erat. Nunc ac ligula mollis, feugiat sem vel, eleifend lorem. Suspendisse id metus neque. In mollis tempus aliquam. ',
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
