function CVEducation({ data }) {
  return (
    <div className="education-element">
      <div className="container">
        <div className="left-div">
          <div className="cv-degree">{data.degree}</div>
          <div className="cv-school">{data.school}</div>
        </div>
        <div className="right-div">
          <div className="cv-date">
            {data.startDate} - {data.endDate}
          </div>
          <div className="cv-educ-place">{data.place}</div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default CVEducation;
