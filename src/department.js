import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '/home/leila/development/code/phase-3/aa-frontend/src/department.css';

const Departments = () => {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    // Fetch departments from the backend API
    axios.get('http://localhost:9292/departments')
      .then((response) => {
        setDepartments(response.data);
      })
      .catch((error) => {
        console.error('Error fetching departments:', error);
      });
  }, []);

  // Function to group departments into rows with a specified number of columns
  const groupDepartmentsIntoRows = (data, columns) => {
    const rows = [];
    const totalDepartments = data.length;
    let rowIndex = 0;
    while (rowIndex < totalDepartments) {
      rows.push(data.slice(rowIndex, rowIndex + columns));
      rowIndex += columns;
    }
    return rows;
  };

  return (
    <div className="departments-page">
      <div className="departments-container">
        <h2>Departments</h2>
        <div className="departments-grid">
          {groupDepartmentsIntoRows(departments, 5).map((row, rowIndex) => (
            <div key={rowIndex} className="departments-row">
              {row.map((department) => (
                <Link key={department.id} to="/appointments" className="department-card">
                  {/* Add department information to the card */}
                  <Card>
                    <Card.Body>
                      <Card.Title>{department.name}</Card.Title>
                      <Card.Text>{department.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              ))}
            </div>
          ))}
        </div>
        {/* Home Button */}
        <button className="home-button" onClick={() => window.location.href = '/'}>Home</button>
      </div>
    </div>
  );
};

export default Departments;
