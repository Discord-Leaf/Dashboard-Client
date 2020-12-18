//General imports
import axios from 'axios';

const getGuilds = () => {
    return axios.get('http://localhost:3001/api/discord/guilds', {
        withCredentials: true
    })
}

//Exports
export default getGuilds;