//General imports
import axios from 'axios';

const updateGuildMusic = (guildId, music) => {
    return axios.put(`https://api.leaf-bot.xyz/api/discord/guilds/${guildId}/music`, {
        music,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildMusic;