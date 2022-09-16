import React from 'react';
import { HiOutlinePencil } from 'react-icons/hi'
const TodaysAppointment = ({ appointments }) => {
    return (
        <div className="bg-white p-3" style={{ borderRadius: '10px' }}>
            <table className='table table-borderless '>
                <thead>
                    <tr>
                        <th className='text-secondary text-left' scope='col'>Sr No</th>

                        <th className='text-secondary' scope='col'>Date</th>
                        <th className='text-secondary' scope='col'>Name</th>
                        <th className='text-secondary' scope='col'>Contact</th>
                        <th className='text-secondary' scope='col'>Prescription</th>
                        <th className='text-secondary' scope='col'>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr key={appointment._id}>
                                <td>{index + 1}</td>
                                <td>{appointment.date}</td>
                                <td>{appointment.name}</td>
                                <td>{appointment.phoneNumber}</td>
                                <td><button className='btn btn-brand'>View</button></td>
                                <td><button className='btn btn-info me-2'>Pending</button><button className='btn btn-warning'><HiOutlinePencil /></button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default TodaysAppointment;