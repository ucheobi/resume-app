import React, { Component } from 'react';

import Register from '../register/register.component';
import User from '../user/user.component';
import CloseButton from '../button/close-button.component';

import './account.styles.scss';

const Account = (props) => {
    //const { showModal, handleSubmit } = props;
    
    return(
        <div className='account'>
            <User />
            <Register />
        </div>
    )
    
}

export default Account;
