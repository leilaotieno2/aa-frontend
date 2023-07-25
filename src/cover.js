import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';

const Cover = () => {
  const categories = ['Home', 'About Us', 'Departments', 'Appointments'];
  const currentLocation = useLocation();

  return (
    <div className="cover-container">
      <div className="content-container">
        <div className="message-container">
          <h1>A.A. Family Hospital</h1>
        </div>
        <div className="button-container">
          {categories.map((category, index) => {
            const toLink = `/${category.toLowerCase().replace(' ', '-')}`;
            const isHome = category === 'Home';
            return (
              <React.Fragment key={index}>
                {isHome ? (
                  <button
                    className={currentLocation.pathname === '/' ? 'active' : ''}
                  >
                    {category}
                  </button>
                ) : (
                  <Link to={toLink}>
                    <button className={currentLocation.pathname === toLink ? 'active' : ''}>
                      {category}
                    </button>
                  </Link>
                )}
              </React.Fragment>
            );
          })}
        </div>
        <div className="bottom-right-buttons">
          <button>Our Doctors</button>
          <Link to="/admin"> {/* Add the Link component to navigate to the Admin component */}
            <button>Admin</button>
          </Link>
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
