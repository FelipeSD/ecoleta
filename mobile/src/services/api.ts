import axios from 'axios';

const api = axios.create({
    baseURL: `${process.env.APP_URL}:${process.env.PORT}`
});

export default api;