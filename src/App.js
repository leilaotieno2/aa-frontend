import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cover from './cover.js';
import Appointment from './Appointment';
import AppointmentConfirmation from './AppointmentConfirmation';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation */}
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/appointments">Appointments</Link>
            </li>
          </ul>
        </nav>

        {/* Define different routes using Route components */}
        <Route exact path="/" component={Cover} />
        <Route exact path="/appointments" component={Appointment} />
        <Route path="/AppointmentConfirmation" component={AppointmentConfirmation} />
      </div>
    </Router>
  );
}

export default App;
