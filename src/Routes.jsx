import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PrivateRoute from './auth/PrivateRoute';
import Home from './core/Home';
import Resume from './core/Resume';
import ResumeForm from './core/ResumeForm';
//import Print from './core/Print';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />

                <PrivateRoute
                    path='/resume/create' exact component={ResumeForm}
                />
                <PrivateRoute
                    path='/resume' exact component={Resume}
                />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;