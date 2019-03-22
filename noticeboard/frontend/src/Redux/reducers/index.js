import { combineReducers } from 'redux';
import posts from './posts';
import errors from './errors';

export default combineReducers({
    posts,
    errors
})