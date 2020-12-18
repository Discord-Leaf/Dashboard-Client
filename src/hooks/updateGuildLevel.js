//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const updateGuildLevel = (guildId, leveling) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/leveling`, {
        leveling,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildLevel;