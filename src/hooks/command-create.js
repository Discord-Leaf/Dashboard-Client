//General imports
import axios from 'axios';

const commandCreate = (guildId, usage, response) => {
    return axios.put(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/command-create`, {
        usage,
        response,
    }, {
        withCredentials: true,
    })
}

//Exports
export default commandCreate;