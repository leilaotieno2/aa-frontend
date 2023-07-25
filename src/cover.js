import React from 'react';
import './App.css';

const Cover = () => {
  const categories = ['Home', 'About Us', 'Departments', 'Appointments'];

  return (
    <div className="cover-container">
      <div className="content-container">
        <div className="message-container">
          <h1>A.A. Family Hospital</h1>
        </div>
        <div className="button-container">
          {categories.map((category, index) => (
            <button key={index}>{category}</button>
          ))}
        </div>
        <div className="bottom-right-buttons">
          <button>Our Doctors</button>
          <button>Admin</button>
        </div>
      </div>
      <div className="image-container">
        <img
          className="background-image"
          src="https://mchwebstorage.blob.core.windows.net/mch-website/images/og/c90dbbd4-12f2-4f8e-a5aa-6dd6dce968e7.jpg"
          alt="Background"
        />
      </div>
    </div>
  );
};

export default Cover;
