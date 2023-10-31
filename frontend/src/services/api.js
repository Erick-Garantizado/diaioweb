import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_HOST_API,
    headers: {
        'Authorization': localStorage.getItem('user-token')
    },
});

export default api;