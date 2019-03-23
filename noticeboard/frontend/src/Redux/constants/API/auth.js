import axios from 'axios';

export const loadUserApi = (config) => {
    return axios.get('api/auth/user', config);
}