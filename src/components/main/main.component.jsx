import React from 'react';

import Features from '../features/features.component';
import Template from '../resume-templates/templates.component';

import './main.styles.scss';


class Main extends React.Component {

    render(){
        return (
            <div className='main'>
                <Features />
                <Template /> 
            </div>   
        )
    }
}

export default Main;