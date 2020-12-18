//General imports
import axios from 'axios';

const updateGuildPrefix = (guildId, prefix) => {
    return axios.put(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/prefix`, {
        prefix,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildPrefix;