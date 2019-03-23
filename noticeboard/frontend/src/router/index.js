import React from 'react';
import { Route, Switch } from 'react-router-dom';

//ROUTES
import Dashboard from '../components/Board/Dashboard';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login'
export default (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/login" exact component={Register} />
        <Route path="/register" exact component={Login} />
    </Switch>
)