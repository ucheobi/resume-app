import React from 'react';

import './skills.scss';

const Skills = ({
    skill,
    progress=50 
}) => (
    <div className='skills'> 
        <h3>SKILLS</h3>
        <hr />
        <p className="skill">{skill}</p>
        <div className='progress-bar'>
            <div class="progress" style={{height:'24px', width:`${progress}%`}}>
            </div> 
        </div>
             
    </div>
)

export default Skills;

