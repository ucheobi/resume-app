import React from 'react';
import TemplateForm from '../components/resume-templates/template-components/template-form.component';
import Layout from './Layout';


const Resume = () => {
    
    return (
        <Layout className='resume' title='Resume Page'>
            <TemplateForm />
        </Layout>
    )
}

export default Resume;