import React from 'react';

import './register.styles.scss';

const Register = () => (
    <section>
        <div className='register'>
            <h3>New Member ? </h3>
            <span>Register Here</span>
            
            <div className='new-register'>
                <form className='register-form'>
                    <input type="text" id="username" name="username" value="" placeholder='Enter your username...' /><br />
                    <input type="text" id="email" name="email" value="" placeholder='Enter your email...' /><br />
                    <input type="password" id="password" name="password" value="" placeholder='Enter your password...' /><br />
                    <input type="password" id="repeat-password" name="repeat-password" value="" placeholder='Repeat Password' /><br /><br />
                    <button type="button">Register</button>
                </form>
            </div>
        </div>
    </section>
)

export default Register;