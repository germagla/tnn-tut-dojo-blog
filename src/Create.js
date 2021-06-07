import React, {useState} from 'react';
import {useHistory} from "react-router-dom";

function Create() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        setIsPending(true);

        e.preventDefault();
        const blog = {title, body, author};
        console.log(blog);
        setTimeout(() => {
            fetch("https://mysterious-eyrie-58576.herokuapp.com/blogs", {
                method: 'POST',
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify(blog),
            }).then(r => {
                console.log(`new blog added`);
                setIsPending(false);
            }).catch(err => {
                console.log(err)
            });
        }, 10);
        //history.go(-1);
        history.push('/');
    };

    return (
        <div className="create">
            <h2>Create new blog post</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title: </label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => {
                        setTitle(e.target.value)
                    }}
                />
                <label>Blog Body:</label>
                <textarea
                    required
                    value={body}
                    onChange={(e) => {
                        setBody(e.target.value)
                    }}

                />
                <label>Author:</label>
                <select value={author} onChange={(event => {
                    setAuthor(event.target.value)
                })}>
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                    <option value="Luigi">Luigi</option>
                </select>
                {isPending ? <button disabled>Adding Blog...</button> : <button>Add Blog</button>}

            </form>
        </div>
    );
}

export default Create;