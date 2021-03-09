import React from 'react';

import './personal.scss';

const Personal = ({ first, ...personalDetails}) => {
    const { middle, last, email, address, phone } = personalDetails;
    
    
    return (
        <section className='personal'>
            <div className='res-name'>
                <span className='last-name'>{last}</span><br />
                <span className='other-names'>{first} {middle}</span>
            </div>
            <div className='details'>
                <h4>PHONE</h4>
                <p>{phone}</p>
                <h4>ADDRESS</h4>
                <p>{address}</p>
                <h4>EMAIL</h4>
                <p>{email}</p> 
            </div>
        </section>
    )
}

export default Personal;