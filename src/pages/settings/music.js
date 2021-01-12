//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local 
import '../../styles/settings/settings.scss';
import updateGuildMusic from '../../hooks/updateGuildMusic.js';

const Music = (props) => {
    const config = props.config;
    function refreshPage() {
        window.location.reload(false);
    }
    const goback = () => window.location.href = `/#/dashboard/${props.config.guildId}/`
    return (
        <div>
            <div>
                <img className="serverimage" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${props.config.guildId}/${props.config.Icon}.png`} />
                <h2 className="servertext" >Music</h2>
                <button children="Go back" onClick={goback} className="goback" />
                <div className="dividor" />
            </div>
            <div>
                <div id="grid-container-settings">
                    <div className="grid-item-settings">
                        {config.Music ?
                            <p className="grid-text">Disable Module</p>
                            :
                            <p className="grid-text">Enable Module</p>
                        }
                        <Formik
                            initialValues={{
                                music: config.Music
                            }}
                            onSubmit={(values) => {
                                updateGuildMusic(config.guildId, values)
                            }}>

                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <label className="switch">
                                            <Field name="music" type="checkbox" />
                                            <span className="slider round"></span>
                                            {config.Music ?
                                                <button type="submit" onClick={refreshPage} className="posy" children="Disable music" />
                                                :
                                                <button type="submit" onClick={refreshPage} className="posy" children="Enable music" />
                                            }
                                        </label>
                                    </form>
                                )
                            }

                        </Formik>
                    </div>
                </div>
            </div>
        </div>
    )
}

//Exports
export default Music;