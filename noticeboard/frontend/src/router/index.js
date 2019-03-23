import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from '../components/Board/Dashboard';

export default (
    <Switch>
        <Route path="/" exact component={Dashboard} />
    </Switch>
)