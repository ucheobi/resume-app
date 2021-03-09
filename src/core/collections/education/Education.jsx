import React from 'react';
import Placement from '../sub-collections/placement';

import './education.scss';

const Education = () => {


    return (
        <section className='education'>
            <h3>EDUCATION</h3>
            <hr />
            <div className='education-list'>          
                <Placement 
                    course='B.Sc Computer Science'
                    place='Ternopil Ukraine'
                    start='09.2011'
                    end='08.2016'
                 />            
            </div>
        </section>
    )

}

export default Education;