//General imports
import axios from 'axios';

const updateGuildLevel = (guildId, leveling) => {
    return axios.put(`http://localhost:3001/api/discord/guilds/${guildId}/leveling`, {
        leveling,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildLevel;