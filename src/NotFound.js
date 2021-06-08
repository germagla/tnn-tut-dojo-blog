import React from 'react';
import {Link} from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>That page could not be found</p>
            <Link to="/tnn-tut-dojo-blog/"></Link>
        </div>
    );
}

export default NotFound;