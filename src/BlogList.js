import React from 'react';
import {Link} from "react-router-dom";

const BlogList = ({blogs, title}) => {

    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog) =>
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/tnn-tut-dojo-blog/blogs/${blog.id}`}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author.toUpperCase()}</p>
                    </Link>
                </div>)}
        </div>
    );
};

export default BlogList;

