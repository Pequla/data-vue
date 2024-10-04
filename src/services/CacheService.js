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
                size: size,
                sort: "id,desc"
            }
        })
    },
    getDataByDiscordId(id) {
        return client.get('/data/discord/' + id)
    },
    getDataByName(name) {
        return client.get('/data/search/' + name)
    },
    getDataByUUID(uuid) {
        return client.get('/data/uuid/' + uuid)
    }
}