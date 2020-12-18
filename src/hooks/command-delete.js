//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const commandDelete = (guildId, usage, response) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/command-delete`, {
        usage,
        response,
    }, {
        withCredentials: true,
    })
}

//Exports
export default commandDelete;