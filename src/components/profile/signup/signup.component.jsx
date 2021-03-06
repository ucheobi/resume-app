import React, { useState } from 'react';
import { signup } from '../../../auth/privacy';

import './signup.styles.scss';

const Signup = () => {

    const [values, setValues] = useState({
        name:"",
        email: "",
        password: "",
        repeat_password: "",
        success: false,
        error: ""
    });

    const handleChange = name => event => {
        setValues({...values, error: false, [name]: event.target.value})
     }

     const {name, email, password, repeat_password, success, error } = values;

     const handleSubmit = event => {
         event.preventDefault();
         setValues({...values, error: false})
         signup({name, email, password, repeat_password})
             .then(data => {
                 if(data.error){
                     setValues({
                         ...values, error: data.error, success: false
                     })
                 } else {
                     setValues({
                         ...values,
                         name: "",
                         email: "",
                         password: "",
                         repeat_password: "",
                         error: "",
                         success: true
                     })
                 }
             })
     }

     const showError = () => (
        <div className='error' style={{display: error ? '' : "none"}}>
            {error}
        </div>
    )

    const showSuccess = () => (
        <div className='success' style={{display: success ? '' : "none"}}>
            {}
        </div>
    )

    return (
        <section>
            <div className='register'>
                <h3>New Member ? </h3>

                {showError()}
                {showSuccess()}
                
                <div className='new-register'>
                    <form className='register-form'>
                        <label>Name</label><br />
                        <input onChange={handleChange('name')} type="text" id="username" name="name" value={name}  /><br />
                        <label>Email</label><br />
                        <input type="text" id="email" onChange={handleChange('email')} name="email" values={email}  /><br />
                        <label>Password</label>
                        <input type="password" id="password" onChange={handleChange('password')} value={password} name="password"  /><br />
                        <label>Repeat Password</label>
                        <input type="password" id="repeat-password" name="repeat_password" value={repeat_password} /><br /><br />                
                        <button type="button" onClick={handleSubmit}>Register</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup;