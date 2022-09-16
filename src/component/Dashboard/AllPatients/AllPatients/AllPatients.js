import React, { useEffect, useState } from 'react';
import Sidebar from '../../Sidebar/Sidebar';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])
    return (
        <div className='container-fluid row'>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5">
                <h5 className="text-brand">All Patient</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;