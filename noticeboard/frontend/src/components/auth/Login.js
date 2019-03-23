import React, { Component, Fragment } from 'react'
import LoginForm from './partials/LoginForm';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            errors: {
                email: '',
                password: '',
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }
    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        return this.setState({ [field]: value });
    };
    onSave(e) {
        e.preventDefault();
    }

    render() {
        const { email, password, errors } = this.props;
        return (
            <Fragment>
                <LoginForm
                    email={email}
                    password={password}
                    errors={errors}
                    onChange={this.handleChange}
                    onSave={this.onSave} />
            </Fragment>
        )
    }
}

export default Login
