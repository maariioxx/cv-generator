import { MdDelete } from 'react-icons/md';

function FormDeleteEducation({ edData, CVData, setCVData }) {
  function handleDeleteEd(e) {
    setCVData((person) => {
      return {
        ...person,
        education: person.education.filter((ed) => ed.school !== e.target.id),
      };
    });
  }
  return (
    <div className="created-ed">
      <div className="ed-name">{edData.school}</div>
      <button type="button" onClick={handleDeleteEd} id={edData.school}>
        <MdDelete />
      </button>
    </div>
  );
}

export default FormDeleteEducation;
