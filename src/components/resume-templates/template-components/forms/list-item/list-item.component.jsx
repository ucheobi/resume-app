import React from 'react';

import AddRemoveBtn from '../../../template-button/add-remove-button/add-remove-btn.component';

import './list-item.styles.scss';

const ListItem = props => {

    return (
       
        <div className='list-container'>        
        {props.listItem.map((item, index) => {
            return(
                <div className='list-item'>
                    <input 
                        type='text' 
                        className='list'
                        name='itemList'
                        placeholder='Enter List here'
                        value={item.itemList}
                        onChange={e => props.handleChange(e, index)}
                    />
                   
                    <AddRemoveBtn 
                        handleAdd={props.handleAdd} 
                        handleRemove={props.handleRemove} 
                    />
                </div>
            )
    })}

        </div>
    )  
}

export default ListItem;