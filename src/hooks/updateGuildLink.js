//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const updateGuildLink = (guildId, link) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/link`, {
        link,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildLink;