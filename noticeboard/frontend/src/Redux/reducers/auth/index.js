import {
    USER_LOADING,
    USER_LOADED,
    AUTH_ERROR
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
            localStorage.removeItem('token')
            return { ...state, isLoading: false, isAuthenticated: false, token: null, user: null, authError: action.error };
        default:
            return state;
    }
}