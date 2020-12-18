//General imports
import axios from 'axios';

const getGuilds = () => {
    return axios.get('https://api.leaf-bot.xyz/api/discord/guilds', {
        withCredentials: true
    })
}

//Exports
export default getGuilds;