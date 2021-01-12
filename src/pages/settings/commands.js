//General imports
import React from 'react';
import { Formik } from 'formik';

//Local imports
import '../../styles/settings/commands.css'
import commandDelete from '../../hooks/command-delete.js';
import commandCreate from '../../hooks/command-create.js';

const Commands = (props) => {
    const config = props.config;
    function refreshPage() {
        window.location.reload(false);
    }
    const goback = () => window.location.href = `/#/dashboard/${props.config.guildId}/`
    return (
        <div>
            <div>
                <img className="serverimage" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${props.config.guildId}/${props.config.Icon}.png`} />
                <h2 className="servertext" >Custom Commands</h2>
                <button children="Go back" onClick={goback} className="goback" />
                <div className="dividor" />
            </div>
            <div>
                <div id="grid-container-settings">
                    <div className="grid-item-settings">
                        <div>
                            <p className="grid-text">Add commands</p>
                        </div>
                        <Formik
                            initialValues={{ usage: 'Command usage', response: 'Command response' }}
                            onSubmit={(values) => {
                                commandCreate(config.guildId, values.usage, values.response)
                            }}>
                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <input type="text" className="form__field" name="usage" onChange={props.handleChange} placeholder='Command Usage' />
                                        <input type="text" className="form__field" name="response" onChange={props.handleChange} placeholder='Command Response' />
                                        <button type="submit" onClick={refreshPage} children="Add command" />
                                    </form>
                                )
                            }
                        </Formik>
                    </div>
                    <table className="cmd">
                        <thead>
                            <tr>
                                <th key="usage">Usage</th>
                                <th key="response">Response</th>
                                <th key="delete">Delete</th>
                            </tr>
                        </thead>
                        {config.Commands.map((command) => (
                            <tbody>
                                <tr>
                                    <th>{command.Usage}</th>
                                    <th>{command.Response}</th>
                                    {console.log(command, config)}
                                    <th className="pointer" onClick={commandDelete(config.guildId, command.Usage, command.Response)} onClick={refreshPage}>oops</th>
                                </tr>
                            </tbody>
                        ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

//Exports
export default Commands;