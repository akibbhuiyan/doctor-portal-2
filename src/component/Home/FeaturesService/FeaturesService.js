import React from 'react';
import treatment from '../../../images/treatment.png'
const FeaturesService = () => {
    return (
        <section className='featureServices pb-0 pb-md-5 my-5'>
            <div className="container mb-4">
                <div className="row mb-5">
                    <div className="col-md-5 mb-4 m-mb-0 d-flex align-items-center">
                        <img src={treatment} alt='treatmetn' className="img-fluid h-75" />
                    </div>
                    <div className="col-md-7 align-self-center">
                        <h1>Exceptional Dental Care, on Your Terms</h1>
                        <p className='text-secondary my-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className='btn btn-primary'>Learn More..</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesService;