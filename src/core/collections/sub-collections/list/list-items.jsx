import React from 'react';

import './list-items.scss';

const ListItems = ({
    title, 
    items="In depth knowledge in HTML, CSS and JavaScript", 
}) => (
    <div className='list'>
        <div className='list-items'>
            <p className="title">{title}</p>
            <ul>
                <li>{items}</li>
            </ul>     
        </div>
         
    </div>
)

export default ListItems;
