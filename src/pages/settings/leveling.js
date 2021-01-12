//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildLevel from '../../hooks/updateGuildLevel.js';

const Leveling = (props) => {
    const config = props.config;
    function refreshPage() {
        window.location.reload(false);
    }
    const goback = () => window.location.href = `/#/dashboard/${props.config.guildId}/`
    return (
        <div>
            <div>
                <img className="serverimage" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${props.config.guildId}/${props.config.Icon}.png`} />
                <h2 className="servertext" >Leveling</h2>
                <button children="Go back" onClick={goback} className="goback" />
                <div className="dividor" />
            </div>
            <div>
                <div id="grid-container-settings">
                    <div className="grid-item-settings">
                        {config.Leveling ?
                            <p className="grid-text">Disable Module</p>
                            :
                            <p className="grid-text">Enable Module</p>
                        }
                        <Formik
                            initialValues={{
                                leveling: config.Leveling
                            }}
                            onSubmit={(values) => {
                                updateGuildLevel(config.guildId, values)
                            }}>

                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <label className="switch">
                                            <Field name="leveling" type="checkbox" />
                                            <span className="slider round"></span>
                                            {config.Leveling ?
                                                <button type="submit" onClick={refreshPage} className="posy" children="Disable leveling" />
                                                :
                                                <button type="submit" onClick={refreshPage} className="posy" children="Enable leveling" />
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
export default Leveling;