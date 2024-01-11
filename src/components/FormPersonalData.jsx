function FormPersonalData(CVData) {
  console.log(CVData);
  let data = CVData.CVData.data;
  let setCVData = CVData.CVData.setCVData;
  function handleNameChange(e) {
    setCVData({
      ...data,
      fullName: e.target.value,
    });
  }
  function handleEmailChange(e) {
    setCVData({
      ...data,
      email: e.target.value,
    });
  }
  function handlePhoneNumberChange(e) {
    setCVData({
      ...data,
      phoneNumber: e.target.value,
    });
  }
  function handlePersonPlaceChange(e) {
    setCVData({
      ...data,
      place: e.target.value,
    });
  }
  return (
    <form className="personal-data-form">
      <h2>Personal Data</h2>
      <label className="full-name-form">
        Full name
        <input type="text" value={data.fullName} onChange={handleNameChange} />
      </label>
      <label className="email-form">
        Email
        <input type="email" value={data.email} onChange={handleEmailChange} />
      </label>
      <label className="phone-number-form">
        Phone number
        <input
          type="tel"
          value={data.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <label className="region-form">
        City, region and country
        <input
          type="text"
          value={data.place}
          onChange={handlePersonPlaceChange}
        />
      </label>
    </form>
  );
}

export default FormPersonalData;
