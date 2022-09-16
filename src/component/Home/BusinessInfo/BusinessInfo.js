import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
const InfosData = [
    {
        title: 'Opening Hour',
        description: 'We are on 7 Days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Broklyn, NY 10003 USA',
        icon: faMapMarkerAlt,
        background: 'dark'
    },
    {
        title: 'Call us Now',
        description: '+156484695341',
        icon: faPhone,
        background: 'primary'
    },
]
const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center'>
            <div className="w-75 row">
                {
                    InfosData.map(info => <InfoCard info={info} />)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;