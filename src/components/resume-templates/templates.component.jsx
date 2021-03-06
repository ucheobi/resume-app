import React, { useState} from 'react';

import Tabular from '../resume-templates/tabular/tabular.component';
import Professional from '../resume-templates/professional/professional.component';
import Modal from '../profile/modal/modal.component';
import Account from '../profile/account/account.component';
import './templates.styles.scss';
import BasicTemplate from './basic/basic-template-form';
import {  useHistory } from "react-router-dom";


const Template = (props) => {
  
    const history = useHistory();
    const [modal, setModal] = useState(false);
    const [isLoggedIn, setisLoggedIn] = useState(true); 
    
    const setChange = () => {
        setModal(!modal)
    }

    const handleRoute = () => history.push('/resume/create')

    const showModal = () => (
        isLoggedIn ? (
            handleRoute()     
        ) : (
            setChange()
        )
    )

    const hideModal = () => (
        setChange()
    )
     
    return(   
            <div className='template'>
                <h2>Choose Your Template</h2>
                <div className='template-item'> 
                    <BasicTemplate showModal={showModal} />
                    <Tabular showModal={showModal}/>
                    <Professional showModal={showModal}/>
                </div>  

                <Modal show={modal} handleClose={hideModal}>
                    <Account />
                </Modal> 
            </div>    
        )
}

export default Template;