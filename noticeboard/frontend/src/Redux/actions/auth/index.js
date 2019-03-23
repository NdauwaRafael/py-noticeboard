import * as authApi from '../../constants/API/auth';
import { getMessages, getErrors } from '../messages';
import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
} from '../../constants/actionTypes';

//CHECK AUTH STATE
export const loadUserSuccess = (resp) => {
    return {
        type: USER_LOADED,
        user: resp
    }
};

export const loadUserFailed = (resp) => {
    return {
        type: AUTH_ERROR,
        error: resp
    }
};

export const userLoading = () => {
    return {
        type: USER_LOADING
    }
}
export const loadUser = () => (dispatch, getState) => {
    dispatch(userLoading());
    const token = getState().auth.token;
    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    if (token) {
        config.headers['Authorization'] = `Token ${token}`;
    }

    authApi.loadUserApi(config)
        .then(resp => {
            return dispatch([
                loadUserSuccess(resp.data),
                getMessages('Login Success')
            ])
        })
        .catch(error => {
            return dispatch([
                loadUserFailed(error.response.data),
                // getErrors(error.response.data.details)
            ])
        })
}