import React from 'react'
import {Link} from 'react-router-dom';

const Nav = () => {
    return (
        <div>
            <nav className="main-Nav">
                <h1>DASHBOARD</h1>
                <ul>
                    <li><Link to='/'>Upload</Link></li>
                    <li><Link to='/playlist'>Playlist</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav;
