import React from 'react';

import AddRemoveBtn from '../../../template-button/add-remove-button/add-remove-btn.component';

import './main-item.styles.scss';

const MainItem = props => {

        return (
           
            <div className='container'>
            
            {props.inputList.map((item, index) => {
                return(
                    <div className='main-item'>
                         
                    <div className='study'>
                        <label for={props.study}>{props.study}</label>
                        <input 
                            type='text' 
                            className='course'
                            name='course'
                            placeholder=''
                            value={item.course}
                            onChange={e => props.handleChange(e, index)}
                        />
                    </div>

                    <div className='uni'>
                        <label for={props.university}>{props.university}</label>

                        <input 
                            type='text'
                            className='school' 
                            name='school'
                            placeholder=''
                            value={item.school}
                            onChange={e => props.handleChange(e, index)}
                        />
                    </div>

                    <div className='duration'>
                        <div className='year-start'>
                            <label for="year-start">Start: (MM:YYYY)</label>
                            <input 
                                type='month'
                                className='date-start' 
                                name='startDate'
                                placeholder='mm-yyyy'
                                value={item.startDate}
                                onChange={e => props.handleChange(e, index)}
                            />
                        </div>

                        <div className='year-end'>
                            <label for="year-end">End: (MM:YYYY)</label>
                            <input 
                                type='month'
                                className='date-end' 
                                name='endDate'
                                value={item.endDate}
                                onChange={e => props.handleChange(e, index)}
                            />
                        </div>
                    </div>
                        <AddRemoveBtn handleAdd={props.handleAdd} handleRemove={props.handleRemove} />
                        
                    </div>
                )
        })}
            </div>
        )  
    }



export default MainItem;