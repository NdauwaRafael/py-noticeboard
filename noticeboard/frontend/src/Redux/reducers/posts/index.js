import {
    GET_POSTS_SUCCESS,
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from '../../constants/actionTypes';

const initialState = {
    posts: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST_SUCCESS:
            return {
                ...state
            }

        case GET_POSTS_SUCCESS:
            return {
                ...state,
                posts: action.posts
            }

        case DELETE_POST_SUCCESS:
            return {
                ...state,
                posts: state.posts.filter(post => post.id !== action.id)
            }

        default:

            return state;
    }
}