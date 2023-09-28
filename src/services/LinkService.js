import axios from "axios";

const client = axios.create({
    baseURL: 'https://link.samifying.com/api',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

export default {
    getInfo() {
        return client.get('/info')
    },
    getGuilds() {
        return client.get('/info/guilds')
    },
    getMinecraftAccountByName(name) {
        return client.get('/cache/name/' + name)
    },
    getLinkDataByUUID(uuid) {
        return client.get(`/data/uuid/${uuid}/history`)
    },
    getDiscordUserByUUID(uuid) {
        return client.get('/user/' + uuid)
    }
}