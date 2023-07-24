import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '../apiConfig';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    appointment_date: "",
    start_time: "",
    end_time: "",
  });

  useEffect(() => {
    fetchAppointments();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments`);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error("Failed to fetch appointments");
      }
    } catch (error) {
      console.error("Error fetching appointments", error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const handleCreateAppointment = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newAppointment),
      });

      if (response.ok) {
        fetchAppointments(); // Refresh appointments list after creating a new one
        setNewAppointment({
          appointment_date: "",
          start_time: "",
          end_time: "",
        });
      } else {
        console.error("Failed to create appointment");
      }
    } catch (error) {
      console.error("Error creating appointment", error);
    }
  };

  return (
    <div>
      <h2>Appointments</h2>
      <form onSubmit={handleCreateAppointment}>
        <label>
          Appointment Date:
          <input
            type="date"
            name="appointment_date"
            value={newAppointment.appointment_date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Time:
          <input
            type="time"
            name="start_time"
            value={newAppointment.start_time}
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Time:
          <input
            type="time"
            name="end_time"
            value={newAppointment.end_time}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Create Appointment</button>
      </form>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.appointment_date} - {appointment.start_time} to {appointment.end_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointment;
