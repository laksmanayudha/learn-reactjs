import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import LandingContent from "./LandingContent";
import LayoutLanding from "./LayoutLanding";
import AuthContent from "./AuthContent";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import SearchJob from "./SearchJob";

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LayoutLanding>
                        <LandingContent />
                    </LayoutLanding>
                </Route>
                <Route exact path="/login">
                    <LayoutLanding>
                        <AuthContent left={<LoginForm />} />
                    </LayoutLanding>
                </Route>
                <Route exact path="/signup">
                    <LayoutLanding>
                        <AuthContent right={<SignupForm />} />
                    </LayoutLanding>
                </Route>
                <Route exact path="/job-vacancy">
                    <LayoutLanding>
                        <SearchJob />
                    </LayoutLanding>
                </Route>
                <Route exact path="/dashboard">
                    <LayoutLanding>
                        <SearchJob />
                    </LayoutLanding>
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;