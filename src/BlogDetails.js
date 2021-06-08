import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import useFetch from "./useFetch";
import BlogList from "./BlogList";
import {Link} from "react-router-dom";

function BlogDetails(props) {
    const {id} = useParams();
    const {data: blog, error, isPending} = useFetch('https://mysterious-eyrie-58576.herokuapp.com/blogs/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('https://mysterious-eyrie-58576.herokuapp.com/blogs/'+blog.id, {
            method: 'DELETE',
        }).then(()=>{history.push('/tnn-tut-dojo-blog/')});
    }
    return (
        <div className="blog-details">
            {error && <div><h1>{error}</h1></div>}
            {isPending && <div><h1>Loading...</h1></div>}
            {blog &&
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author.toUpperCase()}</p>
                <div>{blog.body}</div>
                <button onClick={handleDelete}>Delete</button>
            </article>}

        </div>
    );
}

export default BlogDetails;