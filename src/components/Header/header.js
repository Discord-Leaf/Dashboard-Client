//General imports
import React from 'react';
import { useHistory } from 'react-router-dom';

//Local imports
import '../../styles/header.css';
import getUser from '../../hooks/getUser.js'

import config from '../../../config.js';

import logo from '../../assets/logo.png'
import menuarrow from '../../assets/menuarrow.svg';

const Header = () => {
    const [user, setUser] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [showMenu, setShowMenu] = React.useState(false)
    let history = useHistory();
    React.useEffect(() => {
        getUser()
            .then(({ data }) => {
                setLoading(false)
                return setUser(data);
            }).catch((err) => {
                history.push('/')
                setLoading(false)
            })
    }, [])
    // const login = () => window.location.href = `${config.domain}/api/auth/discord`
    const dashboard = () => window.location.href = '/servers'
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
    const logout = () => window.location.href = `${config.domain}/api/auth/discord/logout`
    const home = () => window.location.href = `/`
    const toggleMenu = () => {
        if (showMenu) {
            setShowMenu(false)
            return
        }
        setShowMenu(true);
    }
    if (!loading) {
        return !loading && (
            <header className="headd">
                <title>Leaf</title>
                <img src={logo} onClick={home} width="40px" height="40px" className="logo" />
                <h1 className="t1" onClick={home} href="/">Leaf</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav_links">Commands</li>
                        <li className="nav_links" onClick={dashboard}>Dashboard</li>
                        <li className="nav_links">Docs</li>
                        <li className="nav_links">Github</li>
                    </ul>
                </nav>
                {user ?
                    <div className="user-wrapper">
                        <div>
                            <img onClick={toggleMenu} src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.avatar}.png`} width="40px" height="40px" className="uimg"></img>
                        </div>
                        <div>
                            <p className="name" onClick={toggleMenu} >{user.discordTag}</p>
                        </div>
                        <div>
                            {showMenu ?
                                <img src={menuarrow} onClick={toggleMenu} className="drop-arrow-flip" />
                                :
                                <img src={menuarrow} onClick={toggleMenu} className="drop-arrow" />
                            }
                        </div>
                        {showMenu ?
                            <div className="menu">
                                <div className="servers">
                                    <button className="bbttnn servers" onClick={dashboard}>My servers</button>
                                </div>
                                <div className="logout">
                                    <button className="bbttnn logout" onClick={logout}>Logout</button>
                                </div>
                            </div>
                            :
                            null
                        }
                    </div>
                    :
                    <div className="bwrapper" >
                        <button onClick={login}>Login</button>
                    </div>
                }
            </header>
        )
    } else {
        return (
            <header className="headd">
                <img src={logo} onClick={home} width="40px" height="40px" className="logo" />
                <title>Leaf</title>
                <h1 className="t1" onClick={home} href="/">Leaf</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav_links">Commands</li>
                        <li className="nav_links" onClick={dashboard}>Dashboard</li>
                        <li className="nav_links">Docs</li>
                        <li className="nav_links">Github</li>
                    </ul>
                </nav>
            </header>
        )
    }
}

//Exports
export default Header;