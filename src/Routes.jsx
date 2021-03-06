import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoute';
import Home from './core/Home';
import Profile from './core/Profile';
import Resume from './core/Resume';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <PrivateRoute
                    path='/resume/create' exact component={Resume}
                />
                <PrivateRoute
                    path='/resume' exact component={Profile}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;