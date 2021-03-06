import React from 'react';

import BulletList from '../forms/bulletpoints-list/bullet-list.component';

import './languages.styles.scss';

const Languages = () => (
    <div className='language'>
        <fieldset>
            <legend><h3>Languages</h3></legend>
            <BulletList />
        </fieldset>      
    </div>
)

export default Languages;