import React from 'react';

import './placement.scss';

const Placement = ({
    course="B.Sc. Computer Science", 
    place="Ternopil University of Economics",
    start="09.2010",
    end="08.2016"   
}) => (
    <div className='placement'>
        <div className='course-year'>
            <span className='course'>{course}</span>
            <span className='year'>{start} - {end}</span>   
        </div>
         <p className="place">{place}</p>
    </div>
)

export default Placement;

