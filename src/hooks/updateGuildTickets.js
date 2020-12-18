//General imports
import axios from 'axios';

const updateGuildTickets = (guildId, tickets) => {
    return axios.put(`http://localhost:3001/api/discord/guilds/${guildId}/tickets`, {
        tickets,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildTickets;