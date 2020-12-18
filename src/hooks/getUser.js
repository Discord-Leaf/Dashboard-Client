//General imports
import axios from 'axios';

//Imports - config
import Config from '../../config.js';

const getUser = () => {
    return axios.get(`${Config.domain}/api/auth`, {
        withCredentials: true
    })
}

//Exports
export default getUser;