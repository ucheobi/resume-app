import React from 'react';

import './template-button.styles.scss';


const TemplateButton = ({showModal, children }) => (
    <button className='basic' onClick={showModal}>
        {children}
    </button>
)

export default TemplateButton;