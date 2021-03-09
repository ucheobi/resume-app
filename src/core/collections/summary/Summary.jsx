import React from 'react';

import './summary.scss';

const Summary = ({ details }) => (
    <section className='summary'>
        <h3>SUMMARY</h3>
        <p>{details}</p>
    </section>
)


export default Summary;