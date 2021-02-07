import React from 'react';

import DataItem from '../forms/data-item/data-item.component';

import './education.styles.scss';

const Education = () => (
    <div className='education'>
        <fieldset>
            <legend><h3>Education</h3></legend>
            <DataItem university="University" study="Study Course" />
        </fieldset>     
    </div>
)

export default Education;