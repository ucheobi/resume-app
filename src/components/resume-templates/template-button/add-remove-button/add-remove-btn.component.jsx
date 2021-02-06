import React from 'react';

import './add-remove-btn.styles.scss';

const AddRemoveBtn = ({ handleAdd, handleRemove }) => (
    <div className='remove-btn'>
        <button
            className='add'
            onClick={handleAdd}
        >
            Add
        </button>
        <button 
            className="remove"
            onClick={() => handleRemove(index)}
        >
            Remove
        </button>
    </div>
)

export default AddRemoveBtn;