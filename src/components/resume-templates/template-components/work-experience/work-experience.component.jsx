import React from 'react';

import DataItem from '../forms/data-item/data-item.component';

import './work-experience.styles.scss';


const WorkExperience = () => (
    <div className='work-experience'>
    <fieldset>
        <legend><h3>Work Experience</h3></legend>

        <DataItem study="Company" university="Place" />
    </fieldset>  
        
    </div>  
)

export default WorkExperience;