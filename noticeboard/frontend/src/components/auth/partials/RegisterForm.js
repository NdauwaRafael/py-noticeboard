import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../common/form/Input';

function RegisterForm({ user: { username, first_name, last_name, email, password, cpassword }, onChange, onSave, errors }) {
    return (
        <Fragment>
            <form onSubmit={onSave}>
                <TextInput
                    name='username'
                    label="Username"
                    value={username}
                    error={errors.username}
                    onChange={onChange} />

                <TextInput
                    name='first_name'
                    label="first_name"
                    value={first_name}
                    error={errors.first_name}
                    onChange={onChange} />

                <TextInput
                    name='last_name'
                    label="last_name"
                    value={last_name}
                    error={errors.last_name}
                    onChange={onChange} />

                <TextInput
                    name='email'
                    label="email"
                    value={email}
                    error={errors.email}
                    onChange={onChange} />

                <TextInput
                    name='password'
                    label="password"
                    value={password}
                    error={errors.password}
                    onChange={onChange} />

                <TextInput
                    name='cpassword'
                    label="cpassword"
                    value={cpassword}
                    error={errors.cpassword}
                    onChange={onChange} />

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}

RegisterForm.propTypes = {
    errors: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSave: PropTypes.func.isRequired
}

export default RegisterForm

