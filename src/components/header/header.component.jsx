import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import SignIn from '../sign-menu/sign-in.component';
import Account from '../profile/account/account.component';
import Modal from '../profile/modal/modal.component';

import './header.styles.scss';
import { isAuthenticated } from '../../auth/privacy';
import UserProfile from '../profile/user-profile/user-profile.component';


const Header = ({data}) => {

    const [show, setShow] = useState(false);
    
    let history = useHistory();

    const showModal = () => {
        setShow(true)
    }

    const hideModal = () => {
        setShow( !show )
    }

    let Login = <button className='login' onClick={showModal}>Register/Login</button>;

    let showLogin = () => {
        isAuthenticated() ? history.push(`/resume`) : showModal()
    } 


    return(
        <div className='header'>
            <div className='logo'>
                <img alt='logo' src='/assets/resume-logo.png' />
            </div>

            <div className='menu'>
                <ul className='menu-items'>
                    <li> <Link to='/'>Home</Link></li>
                    <li><a onClick={showLogin}>Resume</a></li>
                    <li><Link to='/resume'>Blogs</Link></li>
                </ul>
                            
                <Modal show={show} >
                    <Account handleClose={hideModal} />
                </Modal>
                
            </div>


            <div className='signin-signout'>
            {!isAuthenticated() ? (
                <SignIn>
                    {Login}
                </SignIn>
                ) : (
                    <UserProfile />
                )}                                            
            </div>

        </div>
    )
}


export default Header;