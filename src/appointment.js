import React, { useState, useEffect } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    contact_info: '',
    medical_history: '',
    insurance_details: '',
    category_id: '',
  });

 
  const [categoryOptions, setCategoryOptions] = useState([]);

  // Fetch insurance details and category IDs from the backend
  useEffect(() => {
    // Fetch insurance details
    fetch('http://localhost:9292/insurance')
      .then((response) => response.json())
      
      .catch((error) => console.error('Error fetching insurance details:', error));

    // Fetch category IDs
    fetch('http://localhost:9292/categories')
      .then((response) => response.json())
      .then((data) => setCategoryOptions(data))
      .catch((error) => console.error('Error fetching category IDs:', error));
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Send the form data to the backend
    fetch('http://localhost:9292/patients', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the backend if needed
        console.log('Data successfully added to backend:', data);
      })
      .catch((error) => console.error('Error adding data to backend:', error));
  };
  
  return (
    <div>
      <h2>Appointment Form</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Age:
          <input type="number" name="age" value={formData.age} onChange={handleChange} />
        </label>
        <br />
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>
        <br />
        <label>
  Contact Info:
  <input type="text" name="contact_info" value={formData.contact_info} onChange={handleChange} />
</label>

        <br />
        <label>
          Medical History:
          <textarea  type="text" name="medical_history" value={formData.medical_history} onChange={handleChange} />
        </label>
        <br />
        <label>
          Insurance Details:
          <input type="text" name="insuarance_details" value={formData.insurance_details} onChange={handleChange} />
        </label>
        <br />
        <label>
  Category ID:
  <select name="category_id" value={formData.category_id} onChange={handleChange}>
    <option value="">Select Category</option>
    {categoryOptions.map((category) => (
      <option key={category.id} value={category.id}>
        {category.name}
      </option>
    ))}
  </select>
</label>


        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Appointment;
