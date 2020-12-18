//General imports
import React from 'react';
import { useHistory } from 'react-router-dom';

//Font stuff
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//Local imports
import getUser from '../hooks/getUser.js';
import getGuilds from '../hooks/getGuilds.js';
import Header from '../components/Header/header.js';
import MenuWrapper from './menuwrapper.js';
import '../styles/serverpage.css'

const ServerPage = () => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [guilds, setGuilds] = React.useState({});
    let history = useHistory()
    React.useEffect(() => {
        getUser()
            .then(({ data }) => {
                setUser(data)
                return getGuilds();
            }).then(({ data }) => {
                setGuilds(data)
                setLoading(false)
            }).catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])
    if (!loading) {
        return !loading && (
            <div>
                <Header />
                <MenuWrapper guilds={guilds} />
            </div>
        )
    } else {
        return (
            <div>
                <div className="loading">
                    <FontAwesomeIcon icon={faSpinner} size="9x" spin />
                </div>
            </div>
        )
    }
}

//Exports
export default ServerPage;