import React, { useEffect, useState } from 'react';
import { dashboardInfo } from '../../../../SeviceData';
import Sidebar from '../../Sidebar/Sidebar';
import TodaysAppointment from '../TodaysAppointment/TodaysAppointment';
const containerStyle = {
    backgroundColor: '#F4FDFB',
    height: '100%'
}
const Dashboard = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/appointments')
            .then(res => res.json())
            .then(data => {
                const date = (new Date()).toLocaleDateString()
                const todaysAppointment = data.filter(appointment => appointment.date === date)
                setAppointments(todaysAppointment);
            })
    }, [])
    return (
        <div className='container-fluid row' style={containerStyle}>
            <Sidebar />
            <div className="col-md-10 p-4 pr-5">
                <h3>DashBoard</h3>
                <div className="d-flex justify-content-around pb-5">
                    {
                        dashboardInfo.map(data =>
                            <div className=" w-25  d-flex justify-content-center">
                                <div className="details d-flex justify-content-center align-items-center py-4 text-white " style={{ backgroundColor: `${data.bg}`, width: '85%', borderRadius: '10px' }} >
                                    <h1 className='px-3 fw-semibold'>09</h1>
                                    <span className='pe-5'>{data.name}</span>
                                </div>

                            </div>)
                    }
                </div>
                <TodaysAppointment appointments={appointments} />
            </div>
        </div >
    );
};

export default Dashboard;