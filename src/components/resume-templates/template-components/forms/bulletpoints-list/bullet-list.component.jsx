import React from 'react';

import AddRemoveBtn from '../../../template-button/add-remove-button/add-remove-btn.component';

import './bullet-list.styles.scss';

const BulletList = props => (
    <div className='bullets'>
        <h2>Items</h2>
        <div className='list-item'>
            <ul className='list'>
                <li>{props.list}</li>
            </ul>
        </div>
        <AddRemoveBtn 
            handleAdd={props.handleAdd} 
            handleRemove={props.eRemove} 
        />
    </div>
)

export default BulletList;

