import React, { useState } from 'react';
import Chair from '../../../images/chair.png'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({ handleChange }) => {

    return (
        <main style={{ 'height': '600px' }} className='row d-flex align-items-center me-0'>
            <div className="col-md-4 offset-1">
                <h1>Appointment</h1>
                <Calendar onChange={handleChange} value={new Date()} />
            </div>
            <div className="col-md-6">
                <img src={Chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;