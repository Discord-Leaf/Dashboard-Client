//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildLevel from '../../hooks/updateGuildLevel.js';

const Leveling = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section id="grid-container">
                    <div className="grid-item">
                        <h1 className="title opensans middle">Enable or disable leveling.</h1>
                        <div>
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
                                                {config.Music ?
                                                    <button type="submit" children="Disable leveling" />
                                                    :
                                                    <button type="submit" children="Enable leveling" />
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
export default Leveling;