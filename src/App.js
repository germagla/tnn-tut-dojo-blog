import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route exact path="/tnn-tut-dojo-blog/">
                            <Home/>
                        </Route>
                        <Route  path="/tnn-tut-dojo-blog/create">
                            <Create/>
                        </Route>
                        <Route path="/tnn-tut-dojo-blog/blogs/:id">
                            <BlogDetails/>
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
