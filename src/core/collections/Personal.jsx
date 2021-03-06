import React from 'react';

const Personal = ( props) => {
    const {first, middle, last, email, address, phone } = props;
    
    const bold = {
        fontWeight: 'bold'
    }
    
    return (
        <div className='personal'>
            <div className='name'>
                <ul>
                    <li>{last}</li>
                    <li>{first} {middle}</li>
                </ul>
            </div>

            <div className='address'>
                <ul>
                    <li style={bold}>PHONE</li>
                    <li>{phone}</li>
                    <li style={bold}>EMAIL</li>
                    <li>{email}</li>
                    <li style={bold}>ADDRESS</li>
                    <li>{address}</li>
                </ul>
            </div>
        </div>
    )
}

export default Personal;