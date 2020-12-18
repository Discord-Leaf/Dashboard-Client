//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const updateGuildPrefix = (guildId, prefix) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/prefix`, {
        prefix,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildPrefix;