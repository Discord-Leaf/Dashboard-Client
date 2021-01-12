//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildHelp from '../../hooks/updateGuildHelp.js';

const Help = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section id="grid-container">
                    <div className="grid-item">
                        <h1 className="title opensans middle">Enable or disable the help command.</h1>
                        <div>
                            <Formik
                                initialValues={{
                                    help: config.Help,
                                }}
                                onSubmit={(values) => {
                                    updateGuildHelp(config.guildId, values)
                                }}>

                                {
                                    (props) => (
                                        <form onSubmit={props.handleSubmit}>
                                            <label className="switch">
                                                <Field name="help" type="checkbox" />
                                                <span className="slider round"></span>
                                                {config.Help ?
                                                    <button type="submit" children="Disable the help command" />
                                                    :
                                                    <button type="submit" children="Enable the help command" />
                                                }
                                            </label>
                                        </form>
                                    )
                                }

                            </Formik>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

//Exports
export default Help;