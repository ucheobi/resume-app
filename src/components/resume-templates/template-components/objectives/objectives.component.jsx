import React from 'react';

import './objectives.styles.scss';

const Objectives = ({item, handleChange }) => (
    <div className='objectives'>
    <h2>Objectives</h2>
        <label for='name'>Objectives</label>
        <input 
                type="text" 
                value={item} 
                className="form-control"
                onChange={handleChange}
                autoFocus
                required
            />                      
    </div>
       
)

export default Objectives;