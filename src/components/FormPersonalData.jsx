function FormPersonalData({ CVData, setCVData }) {
  function handleNameChange(e) {
    setCVData({
      ...CVData,
      fullName: e.target.value,
    });
  }
  function handleEmailChange(e) {
    setCVData({
      ...CVData,
      email: e.target.value,
    });
  }
  function handlePhoneNumberChange(e) {
    setCVData({
      ...CVData,
      phoneNumber: e.target.value,
    });
  }
  function handlePersonPlaceChange(e) {
    setCVData({
      ...CVData,
      place: e.target.value,
    });
  }
  return (
    <form className="personal-data-form cv-form">
      <h2>Personal Data</h2>
      <label className="full-name-form">
        Full name
        <input
          type="text"
          value={CVData.fullName}
          onChange={handleNameChange}
        />
      </label>
      <label className="email-form">
        Email
        <input type="email" value={CVData.email} onChange={handleEmailChange} />
      </label>
      <label className="phone-number-form">
        Phone number
        <input
          type="tel"
          value={CVData.phoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </label>
      <label className="region-form">
        City, region and country
        <input
          type="text"
          value={CVData.place}
          onChange={handlePersonPlaceChange}
        />
      </label>
    </form>
  );
}

export default FormPersonalData;
