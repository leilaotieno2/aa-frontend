import React, { useState, useEffect } from 'react';
import "/home/leila/development/code/phase-3/aa-frontend/src/appointment.css"
const AppointmentForm = () => {
  // State to hold form data
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [insuranceDetails, setInsuranceDetails] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you can submit the form data to your backend or perform other actions.
    // For example: You can send the data to your server using fetch or Axios.
    // Make sure to include any additional fields like contact info or insurance details.
    console.log('Form submitted!');
    console.log('Name:', name);
    console.log('Gender:', gender);
    console.log('Selected Category:', selectedCategory);
    console.log('Appointment Date:', appointmentDate);
    console.log('Contact Info:', contactInfo);
    console.log('Insurance Details:', insuranceDetails);
  };

  // Fetch categories from the server on component mount
  useEffect(() => {
    // Replace the URL with the actual API endpoint to fetch categories
    fetch('http://localhost:9292/categories')
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <div>
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Gender:</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Category:</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Appointment Date:</label>
          <input
            type="date"
            value={appointmentDate}
            onChange={(e) => setAppointmentDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Contact Information:</label>
          <input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Insurance Details:</label>
          <input
            type="text"
            value={insuranceDetails}
            onChange={(e) => setInsuranceDetails(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AppointmentForm;