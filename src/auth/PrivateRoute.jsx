import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from "./privacy";

const PrivateRoute = ({ component: Component, ...others }) => (
    <Route {...others} render={props => isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect 
                to={{pathname: '/',
                state: {from: props.location }}}
            />
        )
    } />
)

export default PrivateRoute;