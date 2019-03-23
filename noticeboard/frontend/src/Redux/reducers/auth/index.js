import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null,
    authError: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_LOADING:
            return { ...state, isLoading: true };
        case USER_LOADED:
            return { ...state, isLoading: false, isAuthenticated: true, user: action.user };
        case AUTH_ERROR:
        case LOGIN_FAILED:
            localStorage.removeItem('token')
            return { ...state, isLoading: false, isAuthenticated: false, token: null, user: null, authError: action.error };
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.toke)
            console.log(action.payload, 'payload')
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                ...action.payload
            };
        case LOGOUT_SUCCESS:
            localStorage.removeItem('token')
            return { ...state, isLoading: false, isAuthenticated: false, token: null, user: null }
        default:
            return state;
    }
}