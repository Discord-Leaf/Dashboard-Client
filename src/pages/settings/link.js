//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildLink from '../../hooks/updateGuildLink.js';

const LinkBlocker = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section id="grid-container">
                    <div className="grid-item">
                        <h1 className="title opensans middle">Enable or disable link/url blocking.</h1>
                        <div>
                            <Formik
                                initialValues={{
                                    link: config.Link,
                                }}
                                onSubmit={(values) => {
                                    updateGuildLink(config.guildId, values)
                                }}>

                                {
                                    (props) => (
                                        <form onSubmit={props.handleSubmit}>
                                            <label className="switch">
                                                <Field name="link" type="checkbox" />
                                                <span className="slider round"></span>
                                                {config.Link ?
                                                    <button type="submit" children="Disable link blocking" />
                                                    :
                                                    <button type="submit" children="Enable link blocking" />
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
export default LinkBlocker;