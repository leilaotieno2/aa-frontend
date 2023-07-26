import React from 'react';

const AppointmentDateInput = ({ value, onChange }) => {
  return (
    <label>
      Appointment Date:
      <input
        type="date"
        name="appointment_date"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default AppointmentDateInput;
