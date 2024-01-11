function FormDeleteEducation({ data, handleDeleteEd }) {
  console.log(data);
  return (
    <div className="created-ed">
      <div className="ed-name">{data.school}</div>
      <button type="button" onClick={handleDeleteEd} id={data.school}>
        Delete
      </button>
    </div>
  );
}

export default FormDeleteEducation;
