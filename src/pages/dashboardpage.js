//General imports
import React from 'react';
import { Formik } from 'formik';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

//Local imports
import Header from '../components/Header/header.js';
import getUser from '../hooks/getUser.js';
import getGuildConfig from '../hooks/getGuildConfig.js';
import Content from './content.js';
import Music from './settings/music.js';
import Prefix from './settings/prefix.js';
import Tickets from './settings/tickets.js';
import Leveling from './settings/leveling.js';
import Commands from './settings/commands.js';

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
        if (props.page === 'home') {
            return !loading && (
                <div>
                    <Header />
                    <Content config={config} />
                </div>
            )
        }
        if (props.page === 'music') {
            return !loading && (
                <div>
                    <Header />
                    <Music config={config} />
                </div>
            )
        }
        if (props.page === 'prefix') {
            return !loading && (
                <div>
                    <Header />
                    <Prefix config={config} />
                </div>
            )
        }
        if (props.page === 'tickets') {
            return !loading && (
                <div>
                    <Header />
                    <Tickets config={config} />
                </div>
            )
        }
        if (props.page === 'leveling') {
            return !loading && (
                <div>
                    <Header />
                    <Leveling config={config} />
                </div>
            )
        }
        if (props.page === 'commands') {
            return !loading && (
                <div>
                    <Header />
                    <Commands config={config} />
                </div>
            )
        }
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