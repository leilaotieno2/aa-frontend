// In index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from '/home/leila/development/code/phase-3/aa-frontend/src/cover.js';
import AboutUsPage from '/home/leila/development/code/phase-3/aa-frontend/src/AboutUs.js';
import Departments from '/home/leila/development/code/phase-3/aa-frontend/src/department.js';
import Appointments from '/home/leila/development/code/phase-3/aa-frontend/src/appointment.js';
import Admin from '/home/leila/development/code/phase-3/aa-frontend/src/admin.js';
import AppointmentConfirmation from '/home/leila/development/code/phase-3/aa-frontend/src/AppointmentConfirmation.js';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/admin" element={<Admin />} />
      {/* Update the route to include the appointment ID as a parameter */}
      <Route path="/appointment/:appointmentId/confirmation" element={<AppointmentConfirmation />} />
      {/* Add more routes for other pages */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
