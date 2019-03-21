import React, {Component} from 'react';
import Header from './Layouts/Header';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <Header />
        );

    }
}

ReactDOM.render(<App />, document.getElementById('app'));