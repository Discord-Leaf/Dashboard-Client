//General imports
import axios from 'axios';

const getUser = () => {
    return axios.get('https://api.leaf-bot.xyz/api/auth', {
        withCredentials: true
    })
}

//Exports
export default getUser;