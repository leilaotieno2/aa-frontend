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

  return (
    <div
    className="Appointment-container"
    style={{
      backgroundImage: `url("https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-doctor-running-minimalist-background-structure-image_66071.jpg")`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      width: '100vw', // Set the width to the full viewport width
      overflow: 'hidden', // Hide any overflowing content outside the viewport
    }}
  >
      <h2>Appointments</h2>
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
        </div>
        
      </form>
    </div>
  );
};

export default Appointment;
