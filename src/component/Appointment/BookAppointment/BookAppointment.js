import React from 'react';
import { bookingData } from '../../../SeviceData';
import BookingCard from '../BookingCard/BookingCard';

const BookAppointment = ({ selectedDate }) => {
    return (
        <section>
            <h2 className='text-center text-brand mb-5'>Available Appointment on {selectedDate.toDateString()}</h2>
            <div className="row">
                {
                    bookingData.map(book => <BookingCard book={book} key={book.id} date={selectedDate} />)
                }
            </div>
        </section>
    );
};

export default BookAppointment;