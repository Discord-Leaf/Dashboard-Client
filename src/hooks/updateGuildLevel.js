//General imports
import axios from 'axios';

const updateGuildLevel = (guildId, leveling) => {
    return axios.put(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/leveling`, {
        leveling,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildLevel;