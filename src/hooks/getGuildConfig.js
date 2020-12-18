//General imports
import axios from 'axios';

const getGuildConfig = (guildId) => {
    return axios.get(`http://localhost:3001/api/discord/guilds/${guildId}/config`, {
        withCredentials: true
    })
}

//Exports
export default getGuildConfig;