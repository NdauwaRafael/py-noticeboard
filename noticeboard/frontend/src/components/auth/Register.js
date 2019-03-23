import React, { Component, Fragment } from 'react'
import RegisterForm from './partials/RegisterForm';
export class Register extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                username: '',
                first_name: '',
                last_name: '',
                email: '',
                password: ''
            },
            errors: {}
        }
        this.handleChange = this.handleChange.bind(this);
        this.onSave = this.onSave.bind(this);
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;
        let user = Object.assign({}, this.state.user);
        user[field] = value;
        return this.setState({ user });
    };

    emailIsValid(email) {
        const emailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
        return emailRegex.test(String(email).toLowerCase());
    }

    userIsValid() {
        let { user, errors } = this.state;
        let isValid = true;

        if (user.password.length < 6) {
            errors.password = 'Password is too short. Password should be atleast 6 characters long';
            isValid = false;
        } else {
            errors.password = ''
        }

        if (!this.emailIsValid(user.email)) {
            errors.email = 'Enter a valid Email';
            isValid = false;
        } else {
            errors.email = ''
        }

        if (user.first_name < 3) {
            errors.first_name = 'First Name is too short.';
        } else {
            errors.first_name = '';
        }

        if (user.last_name < 3) {
            errors.last_name = 'Last Name is too short.';
        } else {
            errors.last_name = '';
        }

        this.setState({ errors });

        return isValid;
    }

    onSave(e) {
        e.preventDefault();
        if (!this.userIsValid()) {
            return;
        }
    }

    render() {
        let { user, errors } = this.state;
        return (
            <Fragment>
                <RegisterForm
                    user={user}
                    errors={errors}
                    onChange={this.handleChange}
                    onSave={this.onSave}
                />
            </Fragment>
        )
    }
}

export default Register
