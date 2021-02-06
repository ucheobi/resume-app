import React, { Component } from 'react';

import SignIn from '../sign-menu/sign-in.component';
import Account from '../profile/account/account.component';
import Modal from '../profile/modal/modal.component';
import './header.styles.scss';

class Header extends Component {

    constructor(){
        super();

        this.state = { 
            username: '',    
            email: '',
            password: '',
            repeat_password: '',
            forget_password: '',
            show: false
        }
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render(){

        const Login = <button onClick={this.showModal}>Login Button</button>;
        return(
            <div className='header'>
                <div className='logo'>
                    <img alt='logo' src='/assets/resume-logo.png' />
                </div>

                <div className='menu'>
                    <ul className='menu-items'>
                        <li>Home</li>
                        <li>Resume</li>
                        <li>Blogs</li>
                        <li>
                            <SignIn>
                                {Login}
                            </SignIn>
                        </li>
                    </ul>
                    
                   

                    <Modal show={this.state.show} handleClose={this.hideModal}>
                        <Account />
                    </Modal>
                   
                </div>
            </div>
        )
    }

    
}

export default Header;