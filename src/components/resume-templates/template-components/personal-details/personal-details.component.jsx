import React from 'react';

import './personal-details.styles.scss';

const PersonalDetails = () => (
    <div className='details'>
    <h2>Personal Details</h2>
        <div className='name-details'>
            <div className='names'>
                <label for="first"><b>First Name</b></label>
                <input type="text" placeholder="First Name" name="first" value='' id="first" required />

                <label for="last"><b>Last Name</b></label>
                <input type="text" placeholder="Last Name" name="last" id="last" />
            </div>

            <div className='middle'>
                <label for="middle"><b>Middle Name</b></label>
                <input type="text" placeholder="Middle Name" name="middle" id="middle" /> 
            </div>
        </div>

        <div className='other-details'>
            <div className='phone'>
                <label for="phone"><b>Phone Number</b></label>
                <input type="text" placeholder="Phone Number" name="phone" id="phone" /> 
            </div>

            <div className='contact'>
                <label for="contact"><b>Contact Address</b></label>
                <input type="text" placeholder="Contact Address" name="contact" id="contact" /> 
            </div>

            <div className='email'>
                <label for="email"><b>Email Address</b></label>
                <input type="text" placeholder="Email Address" name="email" id="email" /> 
            </div>       
        </div>
    </div>
)

export default PersonalDetails;