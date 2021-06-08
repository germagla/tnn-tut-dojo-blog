import Navbar from "./Navbar";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import NotFound from "./NotFound";

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
                        <Route path="/tnn-tut-dojo-blog/create">
                            <Create/>
                        </Route>
                        <Route path="/tnn-tut-dojo-blog/blogs/:id">
                            <BlogDetails/>
                        </Route>
                        <Route path="/tnn-tut-dojo-blog/*">
                            <NotFound/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
