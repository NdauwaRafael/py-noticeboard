import React, { Component, Fragment } from 'react';
import Header from './Layouts/Header';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../Redux';
import Dashboard from './Board/Dashboard';

//ALERTS
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
const alertOptions = {
    timeout: 3000,
    position: 'top center',
}

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
                <Dashboard />
            </Fragment>
        );

    }
}

render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate}, {...alertOptions}>
            <App />
        </AlertProvider>
    </Provider >,
    document.getElementById('app'));