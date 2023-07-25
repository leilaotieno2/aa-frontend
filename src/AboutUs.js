import React from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <div className="image-container">
        <img
          className="background-image"
          src="https://t4.ftcdn.net/jpg/01/59/14/49/360_F_159144982_IKvdIy2Gs5gGuc3P5cxLH3zBnK5USezb.jpg"
          alt="Background"
        />
      </div>
      <div className="about-us-details">
        <h2>About Us</h2>
        <p>
          Welcome to A.A. Family Hospital!
          We are dedicated to providing compassionate healthcare services, tailored to your needs. Our experienced team and state-of-the-art facilities ensure top-quality care. Your health and well-being are our priority. Trust us to be your partner in health and wellness. Together, let's create a healthier tomorrow.
        </p>
        {/* Add a Link to the Home page with custom styling */}
        <Link to="/" className="home-button">
          Home
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
