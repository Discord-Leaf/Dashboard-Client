//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const commandCreate = (guildId, usage, response) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/command-create`, {
        usage,
        response,
    }, {
        withCredentials: true,
    })
}

//Exports
export default commandCreate;