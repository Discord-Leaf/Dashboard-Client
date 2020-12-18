//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const updateGuildTickets = (guildId, tickets) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/tickets`, {
        tickets,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildTickets;