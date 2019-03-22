import React, {Component, Fragment} from 'react';
import Header from './Layouts/Header';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from '../Redux';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
            </Fragment>
        );

    }
}

render(
    <Provider>
        <App />
    </Provider>, 
    document.getElementById('app'));