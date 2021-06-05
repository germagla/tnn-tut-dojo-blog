import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">New Post</Link>
            </div>
        </nav>
    );
}

export default Navbar;