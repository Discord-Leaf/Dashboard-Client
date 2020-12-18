//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const getGuilds = () => {
    return axios.get(`${Config.domain}/api/discord/guilds`, {
        withCredentials: true
    })
}

//Exports
export default getGuilds;