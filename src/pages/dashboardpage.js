//General imports
import React from 'react';
import { Formik } from 'formik';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//Local imports
import Header from '../components/Header/header.js';
import getUser from '../hooks/getUser.js';
import Prefix from './settings/prefix.jsx';
import getGuildConfig from '../hooks/getGuildConfig.js';
import Content from './settings/content.jsx';
import Music from './settings/music.jsx';

const DashboardPage = (props) => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [config, setConfig] = React.useState({});
    let history = useHistory()
    let match = useRouteMatch()
    React.useEffect(() => {
        getUser()
            .then(({ data }) => {
                setUser(data)
                return getGuildConfig(match.params.id)
            }).then(({ data }) => {
                setConfig(data);
                setLoading(false);
            }).catch((err) => {
                history.push('/')
                console.log(err)
                setLoading(false)
            })
    }, [])
    if (!loading) {
        return !loading && (
            <div>
                <Header />
                <Content config={config} page={props.page} />
            </div>
        )
    } else {
        return (
            <div>
                <div className="loading">
                    <FontAwesomeIcon icon={faSpinner} size="10x" spin />
                </div>
            </div>
        )
    }
}

export default DashboardPage;