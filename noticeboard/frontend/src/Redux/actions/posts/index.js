import {
    GET_POSTS_SUCCESS,
    ADD_POST_SUCCESS,
    DELETE_POST_SUCCESS
} from '../../constants/actionTypes';
import { getPosts } from '../../constants/API/posts';

//GET POSTs
export const getAllPosts = () => dispatch => {
    getPosts()
        .then(resp => {

        })
        .catch(error => {

        })
}