//General imports
import React from 'react';
import { Formik, Field, Form } from 'formik'

//Local imports
import updateGuildMusic from '../../hooks/updateGuildMusic.js';

const Music = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section id="grid-container">
                    <div className="grid-item">
                        <h1 className="title opensans middle">Enable or disable music.</h1>
                        <div>
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
                                                    <button type="submit" children="Disable music" />
                                                    :
                                                    <button type="submit" children="Enable music" />
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
export default Music;