import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return(
        <Router>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            
            <Switch>
                <Route exact path="/">
                    <h1>hello</h1>
                </Route>
                <Route path="/login">
                    <h1>Login</h1>
                </Route>
                <Route>
                    <h1>hehe</h1>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;