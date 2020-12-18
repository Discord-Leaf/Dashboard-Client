//General imports
import React from 'react';
import { Formik } from 'formik';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

//Local imports
import '../../styles/settings/commands.css'
import commandDelete from '../../hooks/command-delete.js';
import commandCreate from '../../hooks/command-create.js';

const Commands = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <section id="grid-container">
                <div className="grid-item">
                    <h1 className="title opensans middle">Create custom commands!</h1>
                    <div>
                        <Formik
                            initialValues={{ usage: 'Command usage', response: 'Command response' }}
                            onSubmit={(values) => {
                                commandCreate(config.guildId, values.usage, values.response)
                            }}>

                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <input type="text" name="usage" onChange={props.handleChange} placeholder='Command Usage' />
                                        <input type="text" name="response" onChange={props.handleChange} placeholder='Command Response' />
                                        <button type="submit" children="Add command" />
                                    </form>
                                )
                            }

                        </Formik>
                    </div>
                    <div>
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
                                        <th className="pointer" onClick={commandDelete(config.guildId, command.Usage, command.Response)}><FontAwesomeIcon icon={faTrashAlt} /></th>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>
                </div>
            </section>
        </div>
    )
}

//Exports
export default Commands;