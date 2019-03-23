import React, { Component, Fragment } from 'react';
import Header from './Layouts/Header';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../Redux';
import Alerts from './Layouts/Alerts';
import AppRoutes from '../router'
//ALERTS
import { transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
const alertOptions = {
    timeout: 5000,
    position: 'top right',
    offset: '70px',
    transition: transitions.FADE
}

class App extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <Header />
                    <Alerts />
                    {
                        AppRoutes
                    }
                </Fragment>
            </Router>
        );

    }
}

render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <App />
        </AlertProvider>
    </Provider >,
    document.getElementById('app'));