import React from 'react';
import {Link} from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/tnn-tut-dojo-blog/">Home</Link>
                <Link to="/tnn-tut-dojo-blog/create">New Post</Link>
            </div>
        </nav>
    );
}

export default Navbar;