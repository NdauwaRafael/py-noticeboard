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

    userIsValid() {
        let { user, errors } = this.state;
        let isValid = true;



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
