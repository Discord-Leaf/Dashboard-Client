//General imports
import axios from 'axios';

const commandDelete = (guildId, usage, response) => {
    return axios.put(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/command-delete`, {
        usage,
        response,
    }, {
        withCredentials: true,
    })
}

//Exports
export default commandDelete;