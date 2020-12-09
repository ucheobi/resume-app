import React from 'react';

import './sign-in.styles.scss';

const SignIn = ( {showModal, children} ) => (
    <div className='sign-in'>
        {children}
    </div>
)

export default SignIn;