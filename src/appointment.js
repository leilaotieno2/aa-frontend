import React, { useEffect, useState } from 'react';
import { API_BASE_URL } from '/home/leila/development/code/phase-3/aa-frontend/src/apiConfig.js';
import './appointment.css';

const Appointment = () => {
  const [appointments, setAppointments] = useState([]);
  const [categories, setCategories] = useState([]);
  const [newAppointment, setNewAppointment] = useState({
    appointment_date: '',
    start_time: '',
    gender: '',
    age: '',
    name: '',
    contactinfo: '',
    medicalhistory: '',
    insurancedetails: '',
    category: '',
  });

  useEffect(() => {
    fetchAppointments();
    fetchCategories();
  }, []);

  const fetchAppointments = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments`);
      if (response.ok) {
        const data = await response.json();
        setAppointments(data);
      } else {
        console.error('Failed to fetch appointments');
      }
    } catch (error) {
      console.error('Error fetching appointments', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/categories`);
      if (response.ok) {
        const data = await response.json();
        setCategories(data);
      } else {
        console.error('Failed to fetch categories');
      }
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAppointment((prevAppointment) => ({
      ...prevAppointment,
      [name]: value,
    }));
  };

  const isStartTimeAlreadyBooked = (startTime) => {
    return appointments.some((appointment) => appointment.start_time === startTime);
  };

  const handleCreateAppointment = async (event) => {
    event.preventDefault();

    // Check if the start time is already booked
    if (isStartTimeAlreadyBooked(newAppointment.start_time)) {
      console.error('Start time already booked');
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAppointment),
      });

      if (response.ok) {
        fetchAppointments(); // Refresh appointments list after creating a new one
        setNewAppointment({
          appointment_date: '',
          start_time: '',
          gender: '',
          age: '',
          name: '',
          contactinfo: '',
          medicalhistory: '',
          insurancedetails: '',
          category: '',
        });
      } else {
        console.error('Failed to create appointment');
      }
    } catch (error) {
      console.error('Error creating appointment', error);
    }
  };

  const handleDeleteAppointment = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/appointments/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        fetchAppointments(); // Refresh appointments list after deletion
      } else {
        console.error('Failed to delete appointment');
      }
    } catch (error) {
      console.error('Error deleting appointment', error);
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
          Gender:
          <input
            type="text"
            name="gender"
            value={newAppointment.gender}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={newAppointment.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={newAppointment.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Contact Info:
          <input
            type="text"
            name="contactinfo"
            value={newAppointment.contactinfo}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Medical History:
          <input
            type="text"
            name="medicalhistory"
            value={newAppointment.medicalhistory}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Insurance Details:
          <input
            type="text"
            name="insurancedetails"
            value={newAppointment.insurancedetails}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <select name="category" value={newAppointment.category} onChange={handleInputChange}>
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Create Appointment</button>
      </form>
      <ul>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.appointment_date} - {appointment.start_time} to {appointment.end_time}
            <button onClick={() => handleDeleteAppointment(appointment.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Appointment;
