import React from 'react';

import './main-item.styles.scss';

const MainItem = props => {

        return (
           
            <div className='container'>
            
            {props.inputList.map((item, index) => {
                return(
                    <div className='main-item'>
                            
                    <label for='education'>Education</label>
                        <input 
                            type='text' 
                            className='certificate'
                            name='certificate'
                            placeholder=''
                            value={item.certificate}
                            onChange={e => props.handleChange(e, index)}
                        />
                        <label for='education'>Education</label>
                        <input 
                            type='text'
                            className='school' 
                            name='school'
                            placeholder=''
                            value={item.school}
                            onChange={e => props.handleChange(e, index)}
                        />
                        <input 
                            type='date'
                            className='date-start' 
                            name='startDate'
                            value={item.startDate}
                            onChange={e => props.handleChange(e, index)}
                        />
                        <input 
                            type='date'
                            className='date-end' 
                            name='endDate'
                            value={item.endDate}
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



export default MainItem;