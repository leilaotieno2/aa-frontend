import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '/home/leila/development/code/phase-3/aa-frontend/src/admin.css'
const Admin = () => {
  const [departments, setDepartments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [categories, setCategories] = useState([]);
  const [patients, setPatients] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const departmentResponse = await axios.get('http://localhost:9292/departments');
      setDepartments(departmentResponse.data);

      const doctorResponse = await axios.get('http://localhost:9292/doctors');
      setDoctors(doctorResponse.data);

      const categoryResponse = await axios.get('http://localhost:9292/categories');
      setCategories(categoryResponse.data);

      const patientResponse = await axios.get('http://localhost:9292/patients');
      setPatients(patientResponse.data);

      const invoiceResponse = await axios.get('http://localhost:9292/invoices');
      setInvoices(invoiceResponse.data);

      const appointmentResponse = await axios.get('http://localhost:9292/appointments');
      setAppointments(appointmentResponse.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
 // Function to handle the home button click
 const handleHomeButtonClick = () => {
    // Replace "/home" with the route to your home page
    window.location.href = '/';
  };

  return (
    <div className="App">
      <div className="cover-container">
        <div className="content-container">
      <h2>Departments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {departments.map((department) => (
            <tr key={department.id}>
              <td>{department.id}</td>
              <td>{department.description}</td>
              <td>{department.created_at}</td>
              <td>{department.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>


      <h2>Doctors</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact Info</th>
            <th>Specialization</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id}>
              <td>{doctor.name}</td>
              <td>{doctor.contact_info}</td>
              <td>{doctor.specialization}</td>
              <td>{doctor.created_at}</td>
              <td>{doctor.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Categories</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category) => (
            <tr key={category.id}>
              <td>{category.name}</td>
              <td>{category.description}</td>
              <td>{category.created_at}</td>
              <td>{category.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Patients</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Contact Info</th>
            <th>Medical History</th>
            <th>Insurance Details</th>
            <th>Category ID</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td>{patient.id}</td>
              <td>{patient.name}</td>
              <td>{patient.age}</td>
              <td>{patient.gender}</td>
              <td>{patient.contact_info}</td>
              <td>{patient.medical_history}</td>
              <td>{patient.insurance_details}</td>
              <td>{patient.category_id}</td>
              <td>{patient.created_at}</td>
              <td>{patient.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Invoices</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Invoice Date</th>
            <th>Due Date</th>
            <th>Total Amount</th>
            <th>Patient ID</th>
            <th>Appointment ID</th>
            <th>Created At</th>
            <th>Updated At</th>
          </tr>
        </thead>
        <tbody>
          {invoices.map((invoice) => (
            <tr key={invoice.id}>
              <td>{invoice.id}</td>
              <td>{invoice.invoice_date}</td>
              <td>{invoice.due_date}</td>
              <td>{invoice.total_amount}</td>
              <td>{invoice.patient_id}</td>
              <td>{invoice.appointment_id}</td>
              <td>{invoice.created_at}</td>
              <td>{invoice.updated_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Appointments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Appointment ID</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Created At</th>
            <th>Updated At</th>
            <th>Doctor ID</th>
            <th>Patient ID</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td>{appointment.id}</td>
              <td>{appointment.appointment_date}</td>
              <td>{appointment.start_time}</td>
              <td>{appointment.end_time}</td>
              <td>{appointment.created_at}</td>
              <td>{appointment.updated_at}</td>
              <td>{appointment.doctor_id}</td>
              <td>{appointment.patient_id}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
        <div className="bottom-right-buttons">
          <button onClick={handleHomeButtonClick}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default Admin;