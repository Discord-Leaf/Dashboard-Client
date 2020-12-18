//General imports
import React from 'react';
import { Formik } from 'formik';

//Local imports
import updateGuildPrefix from '../../hooks/updateGuildPrefix.js';

const Prefix = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section className="grid-containter">
                    <div className="grid-item">
                        <h1 className="title opensans middle">Prefix</h1>
                        <Formik
                            initialValues={{ prefix: config.guildPrefix }}
                            onSubmit={(values) => {
                                updateGuildPrefix(config.guildId, values)
                            }}>

                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <input type="text" className="form__field" name="prefix" onChange={props.handleChange} defaultValue={config.guildPrefix} />
                                        <button type="submit" children="Update prefix" />
                                    </form>
                                )
                            }

                        </Formik>
                    </div>
                </section>
            </div>
        </div>
    )
}

//Exports
export default Prefix;