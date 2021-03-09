import React from 'react';
import ResumeData from './collections/basic/resume-data';
import Layout from './Layout';

const Resume = (props) => {
   
    return (
        <div className='profile'>
            <Layout>
                <ResumeData />      
            </Layout>
        </div>
    )

}


export default Resume;