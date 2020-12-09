import React from 'react';

import './user.styles.scss';

const User = ({ handleSubmit, showModal}) => (
    <section>
        <div className='user'>
            <h3>Existing Member</h3>
            <span className='email-label'>Login Here</span>
            
            <div className='login'>
                <form onSubmit={handleSubmit}>
                    <input type="text" id="email" name="email" value="" placeholder='Enter your email here' /><br />
                    <input type="password" id="password" name="password" value="" placeholder='Enter Password' /><br />
                    <button type="button" onClick={showModal}>Login</button>
                </form>
            </div>
        </div>
    </section>
)

export default User;