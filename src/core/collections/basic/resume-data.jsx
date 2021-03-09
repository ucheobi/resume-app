import React, { useState, useEffect} from 'react';
import { read } from '../../api.js';
import AdditionalInfo from '../additional-info/additional-info.jsx';
import Education from '../education/Education.jsx';
import Interest from '../interest/interest.jsx';
import Language from '../languages/languages.jsx';
import Objectives from '../objectives/Objectives.jsx';
import Personal from '../personal/Personal.jsx';
import References from '../references/references.jsx';
import Skills from '../skills/Skills.jsx';
import Summary from '../summary/Summary.jsx';
import Work from '../work/Work.jsx';

import './resume-data.scss';

const ResumeData = props => {

    const [data, setData] = useState({});
    const [error, setError] = useState(false);

    const getResumeData = resumeId => {
        read(resumeId).then(result => {
            if(result.error){
                setError(result.error)
            } else {
                setData(result);
            }
        })
    }

    // useEffect(() => {
    //     const resumeID = props.match.params.resumeId;
    //     getResumeData(resumeID);
    //     console.log(data);
    // }, [])


    return (
        <div className='resume-data'> 

            <div className='personal-details'>
                <Personal 
                    first='UCHE'
                    last='ANOTA'
                    middle='DARLINGTON'
                    email='ucheobi2009@yahoo.com'
                    address='29 Dusternbrooker Weg, 24105, Kiel, Germany'
                    phone='+234806664684 . +4917647600839' />  
            </div>       
                  
            <div className='data-section'>
                <Work />
                <Education />
                <Skills skill='Communication' progress='80' />
                <Interest />
                <AdditionalInfo />
                
            </div>

            <div className='side-section'>
                <Objectives 
                    objective='An enthusiastic and passionate full stack web development, agile methodology, REST architecture, and
                    JavaScript is my primary programming language. For the past three years, I have been working exclusively in
                    IT engineering and focusing on web applications development I specialize in JavaScript using React
                    frameworks and Node.js for backend (with a small dose of .Net experience).' 
                    />
                <Summary summary />
                <Language skill='English' progress='90' />
                <References 
                    name='Anota Tessa'
                    company='Lift Above Poverty Organization'
                    location='Benin City, Edo State'
                    phone='+2348066646384'
                    email='tessa.anota@yahoo.com' 
                />
            </div>
                
        </div>
    )
}

export default ResumeData;