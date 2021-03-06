import React from './references.component';

import './references.styles.scss';

const References = () => (
    <div className='references'>
        <fieldset>
            <legend><h3>References</h3></legend>

            <div className='details'>
                <label for='name'>Name</label>
                <input 
                    type='text'
                    name='name'
                    placeholder='Name'
                />

                <br />

                <label for='company'>Company</label>
                <input 
                    type='text'
                    name='company'
                    placeholder='Company Name'
                />
            </div>      

            <div className='position'>
                <label for='position'>Position</label>
                <input 
                    type='text'
                    name='position'
                    placeholder='Position'
                />


                <label for='email'>Email</label>
                <input 
                    type='email'
                    name='email'
                    placeholder='Email Address'
                />
            </div>

            <div className='phone'>
                <label for='phone'>Phone No.</label>
                <input 
                    type='number'
                    name='phone'
                    placeholder='Phone Number'
                />
            </div>

        </fieldset>    
    </div>
)

export default References;