import React from 'react';

import Basic from '../resume-templates/basic/basic.component';
import Tabular from '../resume-templates/tabular/tabular.component';
import Professional from '../resume-templates/professional/professional.component';
import Advance from '../resume-templates/advance/advance.component';
import Modal from '../profile/modal/modal.component';
import TemplateForm from './template-components/template-form.component';

import './templates.styles.scss';

class Template extends React.Component {
    constructor(){
        super()
        this.state = { 
            username: '',    
            email: '',
            password: '',
            repeat_password: '',
            forget_password: '',
            show: true
        }
    }

    showModal = () => {
        this.setState({ show: true })
    }

    hideModal = () => {
        this.setState({ show: false })
    }

    render(){

        const button = <button onClick></button>
        return(
            <div>

                <div className='template'>
                    <h2>Choose Your Template</h2>
                    <div className='template-item'> 
                            <Basic />
                            <Tabular />
                            <Professional />
                    </div>               
                </div>

                <Modal show={this.state.show} handleClose={this.hideModal}>
                    <TemplateForm />
                </Modal>
        </div>
        )
    }
}

export default Template;