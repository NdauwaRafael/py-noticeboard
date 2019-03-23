import {
    GET_POSTS_SUCCESS,
    GET_POSTS_FAILED,
    ADD_POST_SUCCESS,
    ADD_POST_FAILED,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAILED,
    GET_ERRORS,
    SUCCESS_MESSAGE
} from '../../constants/actionTypes';
import * as postApi from '../../constants/API/posts';
import { getMessages, getErrors } from '../messages'


//CREATE POST
export const addPostSuccess = (resp) => {
    return {
        type: ADD_POST_SUCCESS,
        post: resp
    }
}

export const addPostFailed = (resp) => {
    return {
        type: ADD_POST_FAILED,
        errors: resp
    }
}

export const addPost = (post) => dispatch => {
    postApi.addPostApi(post)
        .then(resp => {
            return dispatch([
                addPostSuccess(resp.data),
                getMessages('Post was added successfully')
            ])
        })
        .catch(error => {
            if (error.response) {
                return dispatch([
                    addPostFailed(error.response.data),
                    getErrors(error.toString())
                ])
            } else {
                return dispatch(getErrors(error.toString()));
            }
        })
}

//GET POSTs
export const getPostsSuccess = (resp) => {
    return {
        type: GET_POSTS_SUCCESS,
        posts: resp
    }
};

export const getPostsFailed = (resp) => {
    return {
        type: GET_POSTS_FAILED,
        error: resp
    }
}

export const getAllPosts = () => dispatch => {
    postApi.getPosts()
        .then(resp => {
            return dispatch(getPostsSuccess(resp.data));
        })
        .catch(error => {
            if (error.response) {
                return dispatch([
                    getPostsFailed(error.response.data),
                    getErrors(error.response.data.detail)
                ])
            } else {
                return dispatch(getErrors(error.toString()));
            }
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
            return dispatch([
                deletePostSuccess(id),
                getMessages('Post have been deleted successfully!!')
            ]);
        })
        .catch(error => {
            return dispatch(deletePostFailed(error.toString()))
        })
}