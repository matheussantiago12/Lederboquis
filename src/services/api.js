import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.themoviedb.org/3'
});

export default api;