import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../common/form/Input';
import { Link } from 'react-router-dom';

const LoginForm = ({ username, password, onChange, onSave, errors }) => {
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
                    name='password'
                    label="password"
                    value={password}
                    error={errors.password}
                    onChange={onChange} />

                <button type="submit" className="btn btn-success">Login</button>
                <Link to="/register" className="btn btn-outline-secondary btn-sm" style={{ marginLeft: 20 }}>Request Access</Link>
            </form>
        </Fragment>
    )
}

LoginForm.propTypes = {

}

export default LoginForm
