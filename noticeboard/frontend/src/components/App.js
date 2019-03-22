import React, { Component, Fragment } from 'react';
import Header from './Layouts/Header';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from '../Redux';
import Dashboard from './Board/Dashboard';

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
        <App />
    </Provider>,
    document.getElementById('app'));