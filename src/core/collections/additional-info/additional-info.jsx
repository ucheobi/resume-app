import React from 'react';
import ListItems from '../sub-collections/list/list-items';

import './additional-info.scss';


const AdditionalInfo = () => (
    <div className='info'>
        <h3>ADDITIONAL INFORMATION</h3>
        <hr />
        <ListItems 
            title='Area of expertize'
            items='Microsoft Operating System'  />
    </div>
    
)

export default AdditionalInfo;