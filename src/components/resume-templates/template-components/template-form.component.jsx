import React, { Component } from 'react';

import PersonalDetails from './personal-details/personal-details.component';
import WorkExperience from './work-experience/work-experience.component';
import Education from './education/education.component';
import CoreSkills from './core-skills/core-skills.component';

import './template-form.styles.scss';


class TemplateForm extends React.Component {
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
                <h2 className='template'>Resume Form</h2>
                <form className='resume-form' onSubmit={this.handleSubmit}>
                    <div className='personal'>
                        <PersonalDetails />
                        <hr />
                        <Education />
                        <hr />
                        <WorkExperience />
                        <hr />
                        <CoreSkills />
                    </div>         
                </form>
            </div>
        )
    }
}

export default TemplateForm;