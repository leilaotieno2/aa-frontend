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
  const [isAppointmentCreated, setIsAppointmentCreated] = useState(false); // State variable to track appointment creation

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
        setIsAppointmentCreated(true); // Set the state variable to true after successful appointment creation
        setTimeout(() => {
          setIsAppointmentCreated(false); // Reset the state variable after 3 seconds to hide the message
        }, 3000);
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
    <div className="Appointment-container">
      <h2>Appointments</h2>
      {isAppointmentCreated && <p>Appointment created successfully!</p>}
      <form onSubmit={handleCreateAppointment} className="form-container">
        <div className="form-group">
          <label>
            Appointment Date:
            <input
              type="date"
              name="appointment_date"
              value={newAppointment.appointment_date}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Start Time:
            <input
              type="time"
              name="start_time"
              value={newAppointment.start_time}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Gender:
            <input
              type="text"
              name="gender"
              value={newAppointment.gender}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Age:
            <input
              type="number"
              name="age"
              value={newAppointment.age}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={newAppointment.name}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Contact Info:
            <input
              type="text"
              name="contactinfo"
              value={newAppointment.contactinfo}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Medical History:
            <input
              type="text"
              name="medicalhistory"
              value={newAppointment.medicalhistory}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Insurance Details:
            <input
              type="text"
              name="insurancedetails"
              value={newAppointment.insurancedetails}
              onChange={handleInputChange}
            />
          </label>
        </div>
        <div className="form-group">
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
        </div>

        <div className="form-group">
          <button type="submit">Create Appointment</button>
          <button onClick={() => window.location.href = '/'}>Home</button>
        </div>
      </form>

      {isAppointmentCreated && appointments.length > 0 && (
        <div className="appointments-list">
          <h3>Patient Details</h3>
          <div className="appointment-item">
            <p>Date: {appointments[appointments.length - 1].appointment_date}</p>
            <p>Start Time: {appointments[appointments.length - 1].start_time}</p>
            <p>Name: {appointments[appointments.length - 1].name}</p>
            {appointments[appointments.length - 1].category ? (
              <p>Category: {appointments[appointments.length - 1].category.name}</p>
            ) : (
              <p>Category: N/A</p>
            )}
            <button onClick={() => handleDeleteAppointment(appointments[appointments.length - 1].id)}>Delete</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Appointment;
