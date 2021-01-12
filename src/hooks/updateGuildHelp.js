//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const updateGuildHelp = (guildId, help) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/help`, {
        help,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildHelp;