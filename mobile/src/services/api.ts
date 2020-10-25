import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.APP_URL}:${process.env.APP_PORT}`
});

export default api;