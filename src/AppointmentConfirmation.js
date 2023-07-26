import React, { useState } from 'react';

const AppointmentConfirmation = ({ patientData, onUpdate, onDelete }) => {
  const [editedData, setEditedData] = useState(patientData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onUpdate(editedData);
  };

  return (
    <div>
      <h2>Appointment Confirmation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={editedData.name} onChange={handleInputChange} />
        </div>
        {/* Add other form fields */}
        {/* ... */}
        <div>
          <button type="submit">Update</button>
          <button type="button" onClick={onDelete}>Delete</button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentConfirmation;
