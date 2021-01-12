//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildTickets from '../../hooks/updateGuildTickets.js';

const Tickets = (props) => {
    const config = props.config;
    function refreshPage() {
        window.location.reload(false);
    }
    const goback = () => window.location.href = `/#/dashboard/${props.config.guildId}/`
    return (
        <div>
            <div>
                <img className="serverimage" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${props.config.guildId}/${props.config.Icon}.png`} />
                <h2 className="servertext" >Tickets</h2>
                <button children="Go back" onClick={goback} className="goback" />
                <div className="dividor" />
            </div>
            <div>
                <div id="grid-container-settings">
                    <div className="grid-item-settings">
                        {config.Tickets ?
                            <p className="grid-text">Disable Module</p>
                            :
                            <p className="grid-text">Enable Module</p>
                        }
                        <Formik
                            initialValues={{
                                tickets: config.Tickets
                            }}
                            onSubmit={(values) => {
                                updateGuildTickets(config.guildId, values)
                            }}>

                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <label className="switch">
                                            <Field name="tickets" type="checkbox" />
                                            <span className="slider round"></span>
                                            {config.Tickets ?
                                                <button className="posy" onClick={refreshPage} type="submit" children="Disable tickets" />
                                                :
                                                <button className="posy" onClick={refreshPage} type="submit" children="Enable tickets" />
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
export default Tickets;