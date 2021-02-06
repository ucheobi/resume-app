import React from 'react';

import './toggle.styles.scss';

const Toggle = ({ children, showModal }) => (
    <button onClick={showModal}>
        {children}
    </button>
)
    
export default Toggle;