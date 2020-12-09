import React from 'react';

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
                   

                    <div className='remove-btn'>

                            <button
                                className='add'
                                onClick={props.handleAdd}
                            >
                                Add
                            </button>
                            <button 
                                className="remove"
                                onClick={() => props.handleRemove(index)}
                            >
                                Remove
                            </button>
                    </div>
                </div>
            )
    })}

        </div>
    )  
}



export default ListItem;