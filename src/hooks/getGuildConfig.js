//General imports
import axios from 'axios';

const getGuildConfig = (guildId) => {
    return axios.get(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/config`, {
        withCredentials: true
    })
}

//Exports
export default getGuildConfig;