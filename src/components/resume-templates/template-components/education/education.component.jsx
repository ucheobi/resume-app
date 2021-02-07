import React from 'react';

import DataItem from '../data-item/data-item.component';

import './education.styles.scss';

const Education = () => (
    <div className='education'>
        <fieldset>
            <legend><h3>Education</h3></legend>
            <DataItem />
        </fieldset>     
    </div>
)

export default Education;