function CVWork({ data }) {
  return (
    <div className="work">
      <div className="cv-position">{data.position}</div>
      <div className="cv-company">{data.company}</div>
      <div className="cv-date">
        {data.startDate} - {data.endDate}
      </div>
      <div className="cv-place">{data.place}</div>
      <div className="cv-description">{data.description}</div>
    </div>
  );
}

export default CVWork;
