import React from 'react';
import { isAuthenticated, signout } from '../../../auth/privacy';
import { Link, useHistory } from 'react-router-dom';
import { avatar } from './avatar.js';

import './user-profile.styles.scss';

const UserProfile = () => {

    let data = isAuthenticated();
    let history = useHistory();

    const handleSignout = () => {
        signout(() => {
            history.push('/')
        })
    }
    
    return (
        <div className='user'>

            <div className='avatar'>
                <span className='user-avatar'>
                    {avatar(data)}
                </span>

                <div className='user-profile'>

                <div className='profile'>
                    <span className='initials'>
                        {avatar(data)}
                    </span><br /><br />

                    <div className='name-email'>
                        <span className='name'>{data.user.name}</span><br />
                        <span className='email'>{data.user.email}</span>
                    </div>
                    
                </div>
                
                <hr />

                <div className='data'>
                    <a><Link to='/account'>My Account</Link></a>
                    <a><Link to='/resume'>My Resume</Link></a>
                    <a><Link to='/messages'>Messages</Link></a>
                    <a> <Link to='/help'>Help</Link></a>
                    <a onClick={handleSignout}>Signout</a>     
                </div>
            </div>
            </div>

            
        </div>
    )
}

export default UserProfile;