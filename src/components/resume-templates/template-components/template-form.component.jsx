import React, { Component } from 'react';

import PersonalDetails from './personal-details/personal-details.component';
import WorkExperience from './work-experience/work-experience.component';
import Education from './education/education.component';
import CoreSkills from './core-skills/core-skills.component';
import Objectives from './objectives/objectives.component';
import Languages from './languages/languages.component';
import Summary from './summary/summary.component';
import References from './references/references.component';
import Interest from './interest/interest.component';
import AdditionalInfo from '../template-components/additional-info/additional-info.component';


import './template-form.styles.scss';


class TemplateForm extends Component {
    constructor(){
        super()
        this.state = {
            personal_details: {
                first_name: '',
                middle_name: '',
                last_name: '',
                contact_address: '',
                phone_number: [],
                email_address: ''
            },
            age: '',
            objectives: '',
            summary: '',
            work_experience: [],
            education: [],
            skills: [],
            interests: [],
            languages: [],
            references: {
                title: '',
                names: '',
                contact_address: '',
                phone_number: ''
            },
            aditional_info: []
        }
    }

    render(){
     
        return (
            <div className='template-form'>
                <h1 className='template-header'>Resume Form</h1>
                
                <form className='resume-form' onSubmit={this.handleSubmit}>
                    <div className='personal'>
                        <PersonalDetails />
                        <Education /> 
                        <WorkExperience />                        
                        <CoreSkills />                      
                        <Interest />                      
                        <Objectives />                       
                        <Summary />                       
                        <Languages />                      
                        <AdditionalInfo />                      
                        <References />
                    </div>         
                </form>
            </div>
        )
    }
}

export default TemplateForm;