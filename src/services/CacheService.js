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
    getAccess(page, size) {
        return client.get('/access', {
            params: {
                page: page,
                size: size
            }
        })
    },
    getDataById(id) {
        return client.get('/data/discord/' + id)
    },
    getDataByName(name) {
        return client.get('/data/name/' + name)
    }
}