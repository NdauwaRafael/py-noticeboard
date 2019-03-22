import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from '../../constants/actionTypes';
import { getPosts } from '../../constants/API/posts';

//GET POSTs
export const getPostsSuccess = (resp) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts: resp
    }
};

export const getPostsFailed = (resp) => {
    return {
        action: GET_POSTS_FAILED,
        error: resp
    }
}

export const getAllPosts = () => dispatch => {
    getPosts()
        .then(resp => {
            return dispatch(getPostsSuccess(resp));
        })
        .catch(error => {
            return dispatch(getPostsFailed(error.toString()))
        })
}