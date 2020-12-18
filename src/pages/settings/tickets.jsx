//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildTickets from '../../hooks/updateGuildTickets.js';

const Tickets = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section id="grid-container">
                    <div className="grid-item">
                        <h1 className="title opensans middle">Enable or disable the ticket system.</h1>
                        <div>
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
                                                {config.Music ?
                                                    <button type="submit" children="Disable tickets" />
                                                    :
                                                    <button type="submit" children="Enable tickets" />
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
export default Tickets;