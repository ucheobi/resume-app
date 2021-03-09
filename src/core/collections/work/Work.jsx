import React from 'react';
import ListItems from '../sub-collections/list/list-items';
import Placement from '../sub-collections/placement';

import './work.scss';

const Work = () => {


    return (
        <section className='work-xp'>
            <h3>WORK EXPERIENCE</h3>
            <hr />
            <div className='work-list'>
                
                <Placement 
                    course='BMW Automobile Group'
                    place='Munich Germany'
                 />
                <div className='position'>
                    <p>Frontend Web development</p>
                </div>
                <ListItems items='Responsible for creating the a responsive UI for better user experience.' />
                
                
            </div>
        </section>
    )

}

export default Work;