//General imports
import axios from 'axios';

const updateGuildPrefix = (guildId, prefix) => {
    return axios.put(`http://localhost:3001/api/discord/guilds/${guildId}/prefix`, {
        prefix,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildPrefix;