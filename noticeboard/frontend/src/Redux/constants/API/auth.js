import axios from 'axios';
import { loginUser } from '../../actions/auth/index';

export const loadUserApi = (config) => {
    return axios.get('api/auth/user', config);
}

export const loginUserApi = (config) => {
    return axios.post('api/auth/login', user, config)
}