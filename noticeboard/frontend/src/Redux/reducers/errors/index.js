import { GET_ERRORS } from '../../constants/actionTypes';

const initialState = {
    mgs: {},
    status: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.mgs
            };
        default:
            return state;
    }
}