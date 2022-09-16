import React from 'react';
import { Link } from 'react-router-dom';

const FooterCol = (props) => {
    return (
        <div className='col-md-3'>
            <h5 className="text-primary">{props.menuTitle ? props.menuTitle : ''}</h5>
            <ul>
                {
                    props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className='text-secondary'>{item.name}</Link></li>)
                }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;