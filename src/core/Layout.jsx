import React from "react";
import Header from "../components/header/header.component";
import Success from "../components/profile/account/success-button/success.component";

const Layout = ({
    className,
    children    
}) => (
    <div className='layout'>
        <Header />  
        <Success />    
        <div className={className}>{children}</div>
    </div>
)

export default Layout;