import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cover from '/home/leila/development/code/phase-3/aa-frontend/src/cover.js';
import AboutUsPage from '/home/leila/development/code/phase-3/aa-frontend/src/AboutUs.js';
import Departments from '/home/leila/development/code/phase-3/aa-frontend/src/department.js';
import Appointments from '/home/leila/development/code/phase-3/aa-frontend/src/appointment.js';
import Admin from '/home/leila/development/code/phase-3/aa-frontend/src/admin.js'; // Add the import statement for Admin

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Cover />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/admin" element={<Admin />} /> {/* Add the route for the Admin component */}
      {/* Add more routes for other pages */}
    </Routes>
  </Router>,
  document.getElementById('root')
);
