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
    }

    render() {
        let { user, errors } = this.state;
        return (
            <Fragment>
                <RegisterForm
                    user={user}
                    errors={errors}
                />
            </Fragment>
        )
    }
}

export default Register
