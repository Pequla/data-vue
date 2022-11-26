import axios from "axios";

const client = axios.create({
    baseURL: 'https://cache.samifying.com/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getAccess() {
        return client.get('/access?sort=id,asc')
    }
}