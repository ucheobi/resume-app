import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { signin, authenticate } from '../../../auth/privacy.js';

import './signin.styles.scss';

const Signin = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
        error: "",
        loading: false,
        redirectUser: false
    });
   
    const { email, password, loading, error, redirectUser } = values;

    const handleChange = name => event => {
       setValues({...values, error: false, [name]: event.target.value})
    }

    const handleSubmit = event => {
        event.preventDefault();
        setValues({...values, error: false, loading: true})
        signin({email, password})
        .then(data => {
            if(data.error){
                setValues({
                    ...values, error: data.error, loading: false
                })
            } else {
               authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectUser: true
                    })
               })
            }
        })
    }

    const showError = () => (
        <div className='error' style={{display: error ? '' : "none"}}>
            {error}
        </div>
    )

    const showLoading = () => loading && (
        <div className='loading'>
            <h2>Loading...</h2>
        </div>
    )

    const redirectToRoute = () => redirectUser && (
        <Redirect to="/" />
    )

    return (
        <section>
            <div className='user'>
                <h3>Existing Member</h3>

                {showError()}
                {showLoading()}
                {redirectToRoute()}
                
                <div className='login'>
                    <form>
                        <label>Email</label><br />
                        <input type="text" id="email" name="email" onChange={handleChange('email')} value={email} /><br />

                        <label>Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handleChange('password')} /><br /><br />
                        
                        <button type="button" onClick={handleSubmit}>Login</button>
                    </form>
                </div>
            </div>
        </section>
    )

}

export default Signin;