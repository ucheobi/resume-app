import React from 'react';
import BulletList from '../forms/bulletpoints-list/bullet-list.component';

import './additional-info.styles.scss';

const AdditionalInfo = () => (
    <div className='info'>
        <fieldset>
            <legend><h3>Additional Info</h3></legend>
            <BulletList />
        </fieldset>
    </div>
)

export default AdditionalInfo;