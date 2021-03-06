import React, { useState } from 'react';
import Register from '../signup/signup.component';
import Signin from '../signin/signin.component';
import { useHistory, Redirect } from 'react-router-dom';
import { signup, signin } from '../../../auth/privacy';


import './account.styles.scss';

const Account = ({handleClose}) => {

    return(
        <div className='account'>

            <div className='close'>
                <button type='button' onClick={handleClose}>close</button>
            </div>
        
            <Signin />
            <Register />
        </div>
    )
    
}

export default Account;
