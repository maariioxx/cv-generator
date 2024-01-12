import { useState } from 'react';
import FormDeleteEducation from './FormDeleteEducation';
import { MdAdd } from 'react-icons/md';

function FormEducationData({ CVData, setCVData }) {
  const [actualEducData, setActualEducData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
    place: '',
  });

  function handleEducSubmit(e) {
    e.preventDefault();
    setCVData({
      ...CVData,
      education: [
        ...CVData.education,
        {
          school: actualEducData.school,
          degree: actualEducData.degree,
          startDate: actualEducData.startDate,
          endDate: actualEducData.endDate,
          place: actualEducData.place,
        },
      ],
    });
    setActualEducData({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
      place: '',
    });
  }

  function handleEducChange(e) {
    Object.keys(actualEducData).forEach((d) => {
      if (d === e.target.name) {
        setActualEducData({
          ...actualEducData,
          [d]: e.target.value,
        });
      }
    });
  }

  return (
    <form className="education-data-form cv-form" onSubmit={handleEducSubmit}>
      <h2>Education</h2>
      {CVData.education.map((ed) => {
        return (
          <FormDeleteEducation
            edData={ed}
            CVData={CVData}
            setCVData={setCVData}
            key={crypto.randomUUID()}
          />
        );
      })}
      <label className="school-form">
        School
        <input
          type="text"
          name="school"
          value={actualEducData.school}
          onChange={handleEducChange}
        />
      </label>
      <label className="degree-form">
        Degree
        <input
          type="text"
          name="degree"
          value={actualEducData.degree}
          onChange={handleEducChange}
        />
      </label>
      <div className="education-date-form">
        <label htmlFor="">
          Start date
          <input
            type="text"
            name="startDate"
            value={actualEducData.startDate}
            onChange={handleEducChange}
          />
        </label>
        <label htmlFor="">
          Finish date
          <input
            type="text"
            name="endDate"
            value={actualEducData.endDate}
            onChange={handleEducChange}
          />
        </label>
      </div>
      <label className="place-form">
        Place
        <input
          type="text"
          name="place"
          value={actualEducData.place}
          onChange={handleEducChange}
        />
      </label>
      <button type="submit" className="add-button">
        <MdAdd />
      </button>
    </form>
  );
}

export default FormEducationData;
