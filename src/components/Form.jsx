import FormPersonalData from './FormPersonalData';
import FormEducationData from './FormEducationData';
import FormWorksData from './FormWorksData';

function Form({ CVData, setCVData }) {
  return (
    <div className="form">
      <FormPersonalData CVData={CVData} setCVData={setCVData} />
      <FormEducationData CVData={CVData} setCVData={setCVData} />
      <FormWorksData CVData={CVData} setCVData={setCVData} />
    </div>
  );
}

export default Form;
