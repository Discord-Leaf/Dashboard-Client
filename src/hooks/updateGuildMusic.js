//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const updateGuildMusic = (guildId, music) => {
    return axios.put(`${Config.domain}/api/discord/guilds/${guildId}/music`, {
        music,
    }, {
        withCredentials: true,
    })
}

//Exports
export default updateGuildMusic;