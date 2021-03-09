import React from 'react';

import './objectives.scss';

const Objectives = ({
    objective
}) => (
        <section className='objectives'>
            <h3>OBJECTIVES</h3>
            <p>{objective}</p>
        </section>
)


export default Objectives;
