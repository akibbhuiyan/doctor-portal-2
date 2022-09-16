import React from 'react';

const ServicesDetails = ({ service }) => {
    return (
        <div className='col-md-4'>
            <div className={`info-container`}>
                <div >
                    <img style={{ width: '50px' }} src={service.img} alt="" />
                </div>
                <div>
                    <h5 className='my-3'>{service.name}</h5>
                    <p className='text-secondary'> {service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;