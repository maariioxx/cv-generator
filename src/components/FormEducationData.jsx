import { useState } from 'react';

function FormEducationData(CVData) {
  let setCVData = CVData.CVData.setCVData;
  let data = CVData.CVData.data;
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
      ...data,
      education: [
        ...data.education,
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
    <form className="education-data-form" onSubmit={handleEducSubmit}>
      <h2>Education</h2>
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
            type="date"
            name="startDate"
            value={actualEducData.startDate}
            onChange={handleEducChange}
          />
        </label>
        <label htmlFor="">
          Finish date
          <input
            type="date"
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
      <button type="submit">Add</button>
    </form>
  );
}

export default FormEducationData;
