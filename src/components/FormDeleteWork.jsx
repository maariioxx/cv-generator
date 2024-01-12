import { MdDelete } from 'react-icons/md';

function FormDeleteWork({ workData, CVData, setCVData }) {
  function handleDeleteWork(e) {
    console.log(e.target.id);
    setCVData((person) => {
      return {
        ...person,
        works: person.works.filter((w) => w.company !== e.target.id),
      };
    });
  }

  return (
    <div className="created-work">
      <div className="work-position">{workData.position}</div>
      <button type="button" onClick={handleDeleteWork} id={workData.company}>
        <MdDelete />
      </button>
    </div>
  );
}

export default FormDeleteWork;
