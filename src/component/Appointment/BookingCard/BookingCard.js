import React, { useState } from 'react';
import AppoinmentForm from '../AppoinmentForm/AppoinmentForm';

const BookingCard = ({ book, date }) => {
    const { subject, name, time, totalSpace } = book;
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }


    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div className='col-md-4 mb-5'>
            <div className="card p-3">
                <div className="card-body text-center">
                    <h5 className="card-title text-brand">{name} </h5>
                    <h6>{time}</h6>
                    <p>{totalSpace} SPACES AVAILABLE</p>
                    <button onClick={openModal} className="btn btn-brand">Book appointment</button>
                    <AppoinmentForm modalIsOpen={modalIsOpen} closeModal={closeModal} appointmentOn={name} date={date} />
                </div>
            </div>
        </div>
    );
};

export default BookingCard;