import React, { useState } from 'react';

import MainItem from '../main-item/main-item.component';
import './data-item.styles.scss';


const DataItem = () => {

    const [inputList, setInputList ] = useState([{ 
        certificate: '',
        school: '',
        startDate: new Date().toLocaleString(),
        endDate: new Date().toLocaleString()
    }])
    

    const handleChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    const handleRemove = index => {
        const list = [...inputList];
        list.splice(index, 1);
        setInputList(list);
    }

    const handleAdd = () => {
        setInputList([
            ...inputList, 
            { 
                certificate: "", 
                school: "", 
                startDate: new Date().toLocaleString(), 
                endDate: new Date().toLocaleString() 
            }
        ])
    }

    return(
        <div className='data-item'>
            <div className='data-list'>
                <MainItem 
                    key={inputList.id}
                    handleChange={handleChange} 
                    handleAdd={handleAdd} 
                    handleRemove={handleRemove}
                    inputList={inputList} 
                />
            </div>
        </div>
    )
    
}


export default DataItem;