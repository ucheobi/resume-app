import React from 'react';

import './add-remove-btn.styles.scss';

const AddRemoveBtn = ({ index, handleAdd, handleRemove }) => (
    <div className='add-remove-btn'>
        <button
            className='add'
            onClick={handleAdd}
        >
            Add
        </button>
        <button 
            className="remove"
            onClick={(e) => handleRemove(e, index)}
        >
            Remove
        </button>
    </div>
)

export default AddRemoveBtn;