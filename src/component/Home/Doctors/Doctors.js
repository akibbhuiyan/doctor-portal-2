import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctorInfo, setDoctorInfo] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctor')
            .then(res => res.json())
            .then(data => setDoctorInfo(data))
    }, [])
    return (
        <div className='text-center my-5'>
            <div className="container">
                <h5 style={{ color: '#1cc7c1' }} className='text-primary text-uppercase'> Our Doctors</h5>
                <div className="row mt-5">
                    {
                        doctorInfo.map(doctor => <Doctor doctor={doctor} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Doctors;