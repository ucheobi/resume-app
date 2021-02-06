import React from 'react';
import TemplateButton from '../template-button/template-button.component';
import './professional.styles.scss';

const Professional = ({ showModal }) => (
    <div className='professional-template'>
        <TemplateButton showModal={showModal}>
            Professional Template
        </TemplateButton>
      
    </div>
)

export default Professional;