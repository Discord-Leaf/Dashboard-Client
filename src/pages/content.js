//General imports
import React from 'react';

//Assets
import '../styles/settings/content.scss';
import musicicon from '../assets/music.png';
import cmds from '../assets/commands.png';
import trophy from '../assets/trophy.png';

const Content = (props) => {
    const home = () => window.location.href = `/#/dashboard/${props.config.guildId}/home`
    const settings = () => window.location.href = `/#/dashboard/${props.config.guildId}/prefix`
    const music = () => window.location.href = `/#/dashboard/${props.config.guildId}/music`
    const tickets = () => window.location.href = `/#/dashboard/${props.config.guildId}/tickets`
    const leveling = () => window.location.href = `/#/dashboard/${props.config.guildId}/leveling`
    const commands = () => window.location.href = `/#/dashboard/${props.config.guildId}/commands`
    const link = () => window.location.href = `/#/dashboard/${props.config.guildId}/link`
    const help = () => window.location.href = `/#/dashboard/${props.config.guildId}/help`
    const goback = () => window.location.href = `/#/servers`
    return (
        <div className="main-container">
            <div>
                <img className="serverimage" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${props.config.guildId}/${props.config.Icon}.png`} />
                <h2 className="servertext" >{props.config.guildName}</h2>
                <button children="Go back" onClick={goback} className="goback" />
                <div className="dividor" />
            </div>
            <div className="main-container">
                <div id="grid-container">
                    <div onClick={commands} className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={cmds} />
                        <p className="grid-text">Commands</p>
                    </div>
                    <div onClick={music} className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Music</p>
                    </div>
                    <div onClick={settings} className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Prefix</p>
                    </div>
                    <div onClick={leveling} className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={trophy} />
                        <p className="grid-text">Leveling</p>
                    </div>
                    <div className="grid-item" onClick={tickets} >
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Tickets</p>
                    </div>
                    <div className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Help</p>
                    </div>
                    <div className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Link</p>
                    </div>
                    <div className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Music</p>
                    </div>
                    <div className="grid-item">
                        <img className="grid-icon" width="100px" height="100px" src={musicicon} />
                        <p className="grid-text">Music</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Exports
export default Content;