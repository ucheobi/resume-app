import React from 'react';
import TemplateButton from '../template-button/template-button.component';


import './basic.styles.scss';

const BasicTemplate = ({ showModal }) => (
    <div className='basic-template'>
        <TemplateButton showModal={showModal}>
            Basic Template
        </TemplateButton>
    </div>
)

export default BasicTemplate;