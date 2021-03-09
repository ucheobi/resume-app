import React from 'react';

import './references.scss';

const References = ({
    name,
    company,
    location,
    phone,
    email
}) => (
    <div className='references'> 
        <h3>REFERENCES</h3>
        <hr />
        <p className="name">{name}</p>
        <p className="company">{company}</p>
        <p className="location">{location}</p>
        <p className="phone">{phone}</p>
        <p className="email">{email}</p>           
    </div>
)

export default References;

