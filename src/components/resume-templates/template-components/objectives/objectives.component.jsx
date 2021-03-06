import React from 'react';

import './objectives.styles.scss';

const Objectives = ({item, handleChange }) => (
    <div className='objectives'>
    
        <h3>OBJECTIVE</h3>
        <textarea 
            onChange={handleChange} 
            rows="8"
            cols="100"
            name='objective'>       
        </textarea>
                     
    </div>
       
)

export default Objectives;