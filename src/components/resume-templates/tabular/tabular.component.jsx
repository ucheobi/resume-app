import React from 'react';
import TemplateButton from '../template-button/template-button.component';

import './tabular.styles.scss';

const Tabular = ({ showModal }) => (
    <div className='tabular-template'>
        <TemplateButton showModal={showModal}>
            Tabular Template
        </TemplateButton>
    </div>
)

export default Tabular;