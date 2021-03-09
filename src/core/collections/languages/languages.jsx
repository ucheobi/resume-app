import React from 'react';

import './languages.scss';

const Language = ({
    skill,
    progress=50 
}) => (
    <div className='language'> 
        <h3>LANGUAGES</h3>
        <hr />
        <p className="skill">{skill}</p>
        <div className='progress-bar'>
            <div class="progress" style={{height:'24px', width:`${progress}%`}}>
            </div> 
        </div>
             
    </div>
)

export default Language;

