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
import LayoutDashboard from "./LayoutDashboard";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import NotFound from "./NotFound";
import ChangePassword from "./ChangePassowrd";
import ListJobVacancy from "./ListJobVacancy";

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
                    <LayoutDashboard>
                        <Dashboard />
                    </LayoutDashboard>
                </Route>
                <Route exact path="/dashboard/profile">
                    <LayoutDashboard>
                        <Profile />
                    </LayoutDashboard>
                </Route>
                <Route exact path="/dashboard/change-password">
                    <LayoutDashboard>
                        <ChangePassword />
                    </LayoutDashboard>
                </Route>
                <Route exact path="/dashboard/list-job-vacancy">
                    <LayoutDashboard>
                        <ListJobVacancy />
                    </LayoutDashboard>
                </Route>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;