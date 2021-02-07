import React from 'react';

import './objectives.styles.scss';

const Objectives = ({item, handleChange }) => (
    <div className='objectives'>
    <fieldset>
        <legend><h3>OBJECTIVE</h3></legend>
        <textarea onChange={handleChange} name='objective'>Objectives</textarea>
    </fieldset>
    
                     
    </div>
       
)

export default Objectives;