import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {

    const {data: blogs, isPending, error} = useFetch("https://mysterious-eyrie-58576.herokuapp.com/blogs");

    return (
        <div className="home">
            {error && <div><h1>{error}</h1></div>}
            {isPending && <div><h1>Loading...</h1></div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs"} />}
        </div>
    )
};

export default Home;