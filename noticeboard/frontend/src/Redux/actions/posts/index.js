import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from '../../constants/actionTypes';
import * as postApi from '../../constants/API/posts';

//GET POSTs
export const getPostsSuccess = (resp) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts: resp
    }
};

export const getPostsFailed = (resp) => {
    console.log(error)
    return {
        action: GET_POSTS_FAILED,
        error: resp
    }
}

export const getAllPosts = () => dispatch => {
    postApi.getPosts()
        .then(resp => {
            return dispatch(getPostsSuccess(resp));
        })
        .catch(error => {
            return dispatch(getPostsFailed(error.toString()))
        })
}