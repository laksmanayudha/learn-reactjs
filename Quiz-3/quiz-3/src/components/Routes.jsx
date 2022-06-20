import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";
import { AppProvider } from "./AppProvider";
import Layout from "./Layout";
import About from "./About";
import Home from "./Home";
import AppList from "./AppList";
import AppForm from "./AppForm";

const Routes = (props) => {
    return (
        <Router>
            <AppProvider>
                <Layout>
                    <Switch>
                        <Route  exact path="/">
                            <Home />
                        </Route>
                        <Route  exact path="/about">
                            <About />
                        </Route>
                        <Route  exact path="/mobile-list">
                            <AppList />
                        </Route>
                        <Route  exact path="/mobile-form">
                            <AppForm />
                        </Route>
                        <Route  exact path="/mobile-form/edit/:id">
                            <AppForm />
                        </Route>
                        <Route  exact path="/search/:valueOfSearch">
                            <Home />
                        </Route>
                    </Switch>
                </Layout>
            </AppProvider>
        </Router>
    )
}

// const Routes = (props) => {
//     return (
//         <Router>
//             <Switch>
//                 <Route  exact path="/">
//                     <Layout>
//                         <Content />
//                     </Layout>
//                 </Route>
//                 <Route  exact path="/about">
//                     <Layout>
//                         <h1>hello</h1>
//                     </Layout>
//                 </Route>
//             </Switch>
//         </Router>
//     )
// }

export default Routes


