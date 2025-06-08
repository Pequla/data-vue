import axios from "axios";

const client = axios.create({
    baseURL: process.env.VUE_APP_CACHE_API_URL || '/api',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getData(page, size) {
        return client.get('/data', {
            params: {
                page: page,
                size: size,
                sort: "id,desc"
            }
        })
    },
    getDataByGuild(guild, page, size) {
        return client.request({
            url: `/data/guild/${guild}`,
            method: 'get',
            params: {
                page: page,
                size: size,
                sort: "id,desc"
            }
        })
    },
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