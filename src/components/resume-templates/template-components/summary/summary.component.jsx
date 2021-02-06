import React from 'react';

import './summary.styles.scss';

const Summary = ({item, handleChange}) => (
    <div className='summary'>
    <h2>Summary</h2>
        <label for='name'>Summary</label>
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

export default Summary;