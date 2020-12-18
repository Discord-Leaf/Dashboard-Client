//General imports
import axios from 'axios';

const getUser = () => {
    return axios.get('http://localhost:3001/api/auth', {
        withCredentials: true
    })
}

//Exports
export default getUser;