import React from 'react';

import './summary.styles.scss';

const Summary = ({item, handleChange}) => (
    <div className='summary'>
        <h3>SUMMARY</h3>
        <textarea 
            onChange={handleChange} 
            rows="8"
            cols="100"
            name='summary'>       
        </textarea>
    </div>
)

export default Summary;