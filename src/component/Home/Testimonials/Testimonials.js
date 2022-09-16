import React from 'react';
import { testimonials } from '../../../SeviceData';
import Testimonial from '../Testimonial/Testimonial';
import './Testimonials.css'
const Testimonials = () => {
    return (
        <section className='testimonials my-5 py-5'>
            <div className="container">
                <div className="section-header">
                    <h5 className='text-primary text-uppercase'>Testimonial</h5>
                    <h1>Whats our Patients <br /> say's</h1>
                </div>
                <div className="d-flex justify-content-center">
                    <div className=" row">
                        {
                            testimonials.map(testimonial => <Testimonial testimonial={testimonial} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;