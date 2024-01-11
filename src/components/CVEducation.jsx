function CVEducation({ data }) {
  return (
    <div className="education">
      <div className="cv-school">{data.school}</div>
      <div className="cv-degree">{data.degree}</div>
      <div className="cv-date">
        {data.startDate} - {data.endDate}
      </div>
      <div className="cv-educ-place">{data.place}</div>
    </div>
  );
}

export default CVEducation;
