import React from 'react';

import BulletList from '../forms/bulletpoints-list/bullet-list.component';

import './interest.styles.scss';


const Interest = () => (
    <div className='interest'>
        <fieldset>
            <legend><h3>Interest</h3></legend>
            <BulletList />
        </fieldset>
    </div>
)

export default Interest;