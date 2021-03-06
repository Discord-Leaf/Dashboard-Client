//General imports
import React from 'react';

//Local imports
import '../styles/landing.css';
import Header from '../components/Header/header.js';
import Footer from '../components/footer.js';

const LandingPage = () => {
    //External window login
    const login = () => {
        const wlogin = window.open(`${config.domain}/api/auth/discord`, 'Leaf - Login', "height=800,width=500");
        const timer = setInterval(checkWindow, 500);
        //Detecting window close
        function checkWindow() {
            if (wlogin.closed) {
                dashboard();
                clearInterval(timer);
            }
        }
    }
    return (
        <div className="headcolors">
            <Header />
            <div className="dv">
                <h1 className="ltitle h1">The best bot out there</h1>
                <p className="ptitle p">Leaf is a multi purpose discord bot that is designed to make your discord server better. <br />It also features a web dashboard to fully customise leaf for your purpose.</p>
                <div className="btn-div">
                    <button
                        className="b3"
                        onClick={login}
                    >Add to discord!
                </button>
                    <button
                        className="b3 black"
                    >See commands
                </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

//Exports
export default LandingPage;