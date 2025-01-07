import axios from 'axios';

export const baseURL = 'http://localhost:8000';
const API = axios.create({
    baseURL: `${baseURL}/api`,
});


API.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default API;
