//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const getGuildConfig = (guildId) => {
    return axios.get(`${Config.domain}/api/discord/guilds/${guildId}/config`, {
        withCredentials: true
    })
}

//Exports
export default getGuildConfig;