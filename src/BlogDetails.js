import React from 'react';
import {useParams} from "react-router";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
import {Link} from "react-router-dom";

function BlogDetails(props) {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id)
    return (
        <div className="blog-details">
            {error && <div><h1>{error}</h1></div>}
            {isPending && <div><h1>Loading...</h1></div>}
            {blog &&
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author.toUpperCase()}</p>
                <div>{blog.body}</div>
            </article>}

        </div>
    );
}

export default BlogDetails;