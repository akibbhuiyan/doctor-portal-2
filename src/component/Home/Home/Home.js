import React from 'react';
import Blog from '../Blog/Blog';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import FeaturesService from '../FeaturesService/FeaturesService';
import Footer from '../../Shared/Footer/Footer';
import Header from '../Header/Header';
import MakeAnAppointment from '../MakeAnAppointment/MakeAnAppointment';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeaturesService />
            <MakeAnAppointment />
            <Testimonials />
            <Blog />
            <Doctors />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;