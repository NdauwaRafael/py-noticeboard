import React, {Component, Fragment} from 'react';
import Header from './Layouts/Header';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Header />
            </Fragment>
        );

    }
}

ReactDOM.render(<App />, document.getElementById('app'));