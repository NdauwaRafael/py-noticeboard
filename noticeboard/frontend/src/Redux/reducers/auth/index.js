import { ADD_POST_SUCCESS } from '../../constants/actionTypes';

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return state;
        default:
            return state;
    }
}