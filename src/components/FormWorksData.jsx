import { useState } from 'react';

function FormWorksData(CVData) {
  let setCVData = CVData.CVData.setCVData;
  let data = CVData.CVData.data;

  const [actualWorkData, setActualWorkData] = useState({
    position: '',
    company: '',
    startDate: '',
    endDate: '',
    place: '',
    description: '',
  });

  function handleWorkSubmit(e) {
    e.preventDefault();
    setCVData({
      ...data,
      works: [
        ...data.works,
        {
          position: actualWorkData.position,
          company: actualWorkData.company,
          startDate: actualWorkData.startDate,
          endDate: actualWorkData.endDate,
          place: actualWorkData.place,
          description: actualWorkData.description,
        },
      ],
    });
    setActualWorkData({
      position: '',
      company: '',
      startDate: '',
      endDate: '',
      place: '',
      description: '',
    });
  }
  function handleWorkChange(e) {
    Object.keys(actualWorkData).forEach((d) => {
      if (d === e.target.name) {
        setActualWorkData({
          ...actualWorkData,
          [d]: e.target.value,
        });
      }
    });
  }

  return (
    <form className="works-data-form" onSubmit={handleWorkSubmit}>
      <h2>Works</h2>
      <label htmlFor="">
        Position
        <input
          type="text"
          name="position"
          value={actualWorkData.position}
          onChange={handleWorkChange}
        />
      </label>
      <label htmlFor="">
        Company
        <input
          type="text"
          name="company"
          value={actualWorkData.company}
          onChange={handleWorkChange}
        />
      </label>
      <label htmlFor="">
        Start date
        <input
          type="date"
          name="startDate"
          value={actualWorkData.startDate}
          onChange={handleWorkChange}
        />
      </label>
      <label htmlFor="">
        Finish date
        <input
          type="date"
          name="endDate"
          value={actualWorkData.endDate}
          onChange={handleWorkChange}
        />
      </label>
      <label htmlFor="">
        Place
        <input
          type="text"
          name="place"
          value={actualWorkData.place}
          onChange={handleWorkChange}
        />
      </label>
      <button type="submit">Add</button>
    </form>
  );
}

export default FormWorksData;
