//General imports
import React from 'react';

const Home = (cfig) => {
    const config = cfig.config.config;
    return (
        <div>
            <div>
                <section className="grid-containter">
                    <div className="grid-item">
                        <h1 className="title opensans middle">{config.guildName}</h1>
                    </div>
                    <div className="grid-item">
                        <h1 className="title opensans middle">Guild ID</h1>
                        <p className="opensans">{config.guildId}</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

//Exports
export default Home;