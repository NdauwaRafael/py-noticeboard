import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,
    ADD_POST_SUCCESS,
    ADD_POST_FAILED,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED
} from '../../constants/actionTypes';
import * as postApi from '../../constants/API/posts';


//CREATE POST
export const addPostSuccess = (resp) => {
    return {
        type: ADD_POST_SUCCESS
    }
}

export const addPostFailed = (resp) => {
    return {
        type: ADD_POST_FAILED,
        error: resp
    }
}

export const addPost = () => dispatch => {

}

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

//DELETE POST
export const deletePostSuccess = (resp) => {
    return {
        type: DELETE_POST_SUCCESS,
        id: resp
    }
};

export const deletePostFailed = (resp) => {
    console.log(resp, 'error')
    return {
        action: DELETE_POST_FAILED,
        error: resp
    }
}

export const deletePost = (id) => dispatch => {
    postApi.DELETE_POST(id)
        .then(resp => {
            return dispatch(deletePostSuccess(id));
        })
        .catch(error => {
            return dispatch(deletePostFailed(error.toString()))
        })
}