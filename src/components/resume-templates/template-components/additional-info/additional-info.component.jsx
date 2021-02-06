import React from 'react';
import BulletList from '../forms/bulletpoints-list/bullet-list.component';
import AdditionalInfo from '../forms/bulletpoints-list/bullet-list.component';

import './additional-info.styles.scss';

const AdditionalInfo = (props) => (
    <div className='info'>
        <h2>Additional Info here</h2>
        <BulletList item={props.item} />
    </div>
)

export default AdditionalInfo;