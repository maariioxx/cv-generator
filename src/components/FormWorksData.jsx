import { useState } from 'react';
import FormDeleteWork from './FormDeleteWork';
import { MdAdd } from 'react-icons/md';

function FormWorksData({ CVData, setCVData }) {
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
      ...CVData,
      works: [
        ...CVData.works,
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
    <form className="works-data-form cv-form" onSubmit={handleWorkSubmit}>
      <h2>Works</h2>
      {CVData.works.map((work) => {
        return (
          <FormDeleteWork
            workData={work}
            CVData={CVData}
            setCVData={setCVData}
            key={crypto.randomUUID()}
          />
        );
      })}
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
      <div className="works-date-form">
        <label htmlFor="">
          Start date
          <input
            type="text"
            name="startDate"
            value={actualWorkData.startDate}
            onChange={handleWorkChange}
          />
        </label>
        <label htmlFor="">
          Finish date
          <input
            type="text"
            name="endDate"
            value={actualWorkData.endDate}
            onChange={handleWorkChange}
          />
        </label>
      </div>
      <label htmlFor="">
        Place
        <input
          type="text"
          name="place"
          value={actualWorkData.place}
          onChange={handleWorkChange}
        />
      </label>
      <label htmlFor="">
        Description
        <input
          type="text"
          name="description"
          value={actualWorkData.description}
          onChange={handleWorkChange}
        />
      </label>
      <button type="submit" className="add-button">
        <MdAdd />
      </button>
    </form>
  );
}

export default FormWorksData;
