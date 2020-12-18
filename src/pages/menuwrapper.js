//General imports
import React from 'react';
import { Link } from 'react-router-dom'

//Local imports
import '../styles/menuwrapper.css';
import discord from '../assets/discord.png';

//Config
import Config from '../../config.js';

const MenuWrapper = ({ guilds }) => {
    return (
        <div key="wrapper">
            <h4 className="headtitle">PLEASE SELECT A SERVER</h4>
            {guilds.included.map((guild) => (
                <div className="flex">
                    <div className="svr">
                        <div key="img" className="image">
                            {guild.icon ?
                                <img key="immg" className="simg" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}></img>
                                :
                                <img key="imgg" className="simg" width="50px" height="50px" src={discord}></img>

                            }
                        </div>
                        <div key="txt" className="txt">
                            <p key="txxt" className="guildn">{guild.name}</p>
                        </div>
                        <div key="btn" className="bttn">
                            <button key="bttn" className="btn db"><Link to={`/dashboard/${guild.id}`}>Edit Settings</Link></button>
                        </div>
                    </div>
                </div>
            ))}
            {/* for guilds that the bot isnt in */}
            {guilds.excluded.map((guild) => (
                <div className="flex">
                    <div className="svr">
                        <div className="image">
                            {guild.icon ?
                                <img key="immg" className="simg" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}></img>
                                :
                                <img key="imgg" className="simg" width="50px" height="50px" src={discord}></img>

                            }
                        </div>
                        <div className="txt">
                            <p className="guildn">{guild.name}</p>
                        </div>
                        <div className="bttn">
                            <a href={`http://discord.com/oauth2/authorize?client_id=${Config.client_id}&scope=bot&guild_id=${guild.id}&response_type=code&redirect_uri=${encodeURIComponent(`${Config.domain}/api/auth/discord/redirect`)}`}><button className="btn su">Setup Leaf</button></a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

//Exports
export default MenuWrapper;