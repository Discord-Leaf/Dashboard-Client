//General imports
import axios from 'axios';

const updateGuildMusic = (guildId, music) => {
    return axios.put(`http://localhost:3001/api/discord/guilds/${guildId}/music`, {
        music,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildMusic;