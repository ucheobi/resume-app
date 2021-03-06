import React from 'react';

import DataList from '../data-list/data-list.component';

import './bullet-list.styles.scss';

const BulletList = props => (
    <div className='bullets'>
        <div className='list-item'>
            <ul className='list'>
                <li><DataList /></li>
            </ul>
        </div>
    </div>
)

export default BulletList;

