function CVWork({ data }) {
  return (
    <div className="work-element">
      <div className="container">
        <div className="cv-position">{data.position}</div>
        <div className="cv-company-date">
          {data.company} | {data.startDate} - {data.endDate}{' '}
        </div>
        <div className="cv-place">{data.place}</div>
        <div className="cv-description">{data.description}</div>
      </div>
      <hr />
    </div>
  );
}

export default CVWork;
