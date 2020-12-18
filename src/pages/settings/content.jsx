//General imports
import React from 'react';

import '../../styles/settings/content.css';

import Music from './music.jsx';
import Prefix from './prefix.jsx';
import Commands from './commands.jsx';
import Home from './home.jsx';
import Leveling from './leveling.jsx';
import Tickets from './tickets.jsx';

//Font Awesome Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner, faHome, faCog, faMusic, faTicketAlt, faLevelUpAlt, faBars } from '@fortawesome/free-solid-svg-icons'
import { config } from '@fortawesome/fontawesome-svg-core';

const Content = (props) => {
    const home = () => window.location.href = `/dashboard/${props.config.guildId}/home`
    const settings = () => window.location.href = `/dashboard/${props.config.guildId}/settings`
    const music = () => window.location.href = `/dashboard/${props.config.guildId}/music`
    const tickets = () => window.location.href = `/dashboard/${props.config.guildId}/tickets`
    const leveling = () => window.location.href = `/dashboard/${props.config.guildId}/leveling`
    const commands = () => window.location.href = `/dashboard/${props.config.guildId}/commands`
    return (
        <div>
          <section id="side-bar">
            <section className="links-container">
                <div id="home-link" onClick={home} className={props.page === 'home' ? 'link-active' : 'link-inactive'}>
                    <div className=" icon">
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <span className="options">Home</span>
                </div>
                <div id="settings-link" onClick={settings} className={props.page === 'settings' ? 'link-active' : 'link-inactive'} >
                    <div className="icon">
                        <FontAwesomeIcon icon={faCog} />
                    </div>
                    <span className="options">Settings</span>
                </div>
                <div id="music-link" onClick={music} className={props.page === 'music' ? 'link-active' : 'link-inactive'}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faMusic} />
                    </div>
                    <span className="options">Music</span>
                </div>
                <div id="tickets-link" onClick={tickets} className={props.page === 'tickets' ? 'link-active' : 'link-inactive'}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTicketAlt} />
                    </div>
                    <span className="options">Tickets</span>
                </div>
                <div id="leveling-link" onClick={leveling} className={props.page === 'leveling' ? 'link-active' : 'link-inactive'}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faLevelUpAlt} />
                    </div>
                    <span className="options">Leveling</span>
                </div>
                <div id="commands-link" onClick={commands} className={props.page === 'commands' ? 'link-active' : 'link-inactive'}>
                    <div className="icon">
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <span className="options">Commands</span>
                </div>
            </section>
        </section>
        <div className="content">
                {
                    props.page === 'home'  ?
                        <Home config={props} /> 
                    : props.page === 'settings' ?
                        <Prefix config={props} />
                    : props.page === 'music' ?
                        <Music config={props} />
                    : props.page === 'tickets' ?
                        <Tickets config={props} />
                    : props.page === 'leveling' ?
                        <Leveling config={props} />
                    : props.page === 'commands' ?
                        <Commands config={props} />
                    : <Home config={props} />  
                }
            </div>
        </div>
    )
}

//Exports
export default Content;