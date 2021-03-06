import React, { useState } from 'react';

import './success-button.styles.scss';

const Success = () => {
    const [success, setSuccess] = useState(false);

    const setAnimation = () => {
        setSuccess(!success)
    }

    return (
        <div className='success' style={{display: success ? '' : "none"}}>
            <span className='show-success'>Account Creation was SUCCESSFUL!!!</span>
        </div>
    )
}

export default Success;