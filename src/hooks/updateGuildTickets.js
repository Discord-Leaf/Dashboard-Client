//General imports
import axios from 'axios';

const updateGuildTickets = (guildId, tickets) => {
    return axios.put(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/tickets`, {
        tickets,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildTickets;