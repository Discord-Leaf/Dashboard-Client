//General imports
import React from 'react';
import { Formik } from 'formik';

//Local imports
import '../../styles/settings/settings.scss';
import updateGuildPrefix from '../../hooks/updateGuildPrefix.js';

const Prefix = (props) => {
    const config = props.config;
    function refreshPage() {
        window.location.reload(false);
    }
    const goback = () => window.location.href = `/#/dashboard/${props.config.guildId}/`
    return (
        <div>
            <div>
                <img className="serverimage" width="50px" height="50px" src={`https://cdn.discordapp.com/icons/${props.config.guildId}/${props.config.Icon}.png`} />
                <h2 className="servertext" >Prefix</h2>
                <button children="Go back" onClick={goback} className="goback" />
                <div className="dividor" />
            </div>
            <div>
                <div id="grid-container-settings">
                    <div className="grid-item-settings">
                        <div>
                            <p className="grid-text">Change prefix</p>
                        </div>
                        <Formik
                            initialValues={{ prefix: config.guildPrefix }}
                            onSubmit={(values) => {
                                updateGuildPrefix(config.guildId, values)
                            }}>

                            {
                                (props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <input type="text" className="form__field" name="prefix" onChange={props.handleChange} defaultValue={config.guildPrefix} />
                                        <button type="submit" onClick={refreshPage} className="posy pos" children="Update prefix" />
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
export default Prefix;