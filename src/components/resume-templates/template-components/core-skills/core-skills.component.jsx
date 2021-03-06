import React from 'react';

import BulletList from '../forms/bulletpoints-list/bullet-list.component';

import './core-skills.styles.scss';

const CoreSkills = () => (
    <div className='core-skills'>
        <fieldset>
            <legend><h3>Core Skills</h3></legend>
            <BulletList />
        </fieldset>      
    </div>
)

export default CoreSkills;