import React, { useState } from 'react';

import ListItem from '../list-item/list-item.component';

import './data-list.styles.scss';

const DataList = () => {
    const [listItem, setListItem ] = useState([{ 
        itemList: ''
    }])
    

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...listItem];
        list[index][name] = value;
        setListItem(list);
    }

    const handleRemove = index => {
        const list = [...listItem];
        list.splice(index, 1);
        setListItem(list);
    }

    const handleAdd = () => {
        setListItem([
            ...listItem, 
            { 
                itemList: ""
            }
        ])
    }

    return(
        <div className='data-item'>
            <div className='data-list'>
                <ListItem 
                    key={listItem.id}
                    handleChange={handleChange} 
                    handleAdd={handleAdd} 
                    handleRemove={handleRemove}
                    listItem={listItem} 
                />
            </div>
        </div>
    )
}

export default DataList;