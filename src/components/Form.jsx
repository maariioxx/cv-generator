import FormPersonalData from './FormPersonalData';
import FormEducationData from './FormEducationData';
import FormWorksData from './FormWorksData';

function Form(data, setCVData) {
  let CVData = data;
  return (
    <>
      <FormPersonalData CVData={CVData} />
      <FormEducationData CVData={CVData} />
      <FormWorksData CVData={CVData} />
    </>
  );
}

export default Form;
