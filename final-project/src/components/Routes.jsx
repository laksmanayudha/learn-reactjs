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
import JobForm from "./JobForm";
import DetailJob from "./DetailJob";
import { AuthProvider } from "./AuthProvider";
import { JobProvider } from "./JobProvider";
import {AuthorizedRoute, AuthenticationRoute} from "./CustomRoute";
import { ProfileProvider } from "./ProfileProvider";

// state menyimpan data sementara, jika terjadi update, kemudian refersh page, maka state akan reset kembali
// kecuali tangkap / isi data pada state kembali di hooks (useEffect)
// context/provider yang menajdi beda parent pada komponent yang berbeda, value yang sama masih dapat digunakan pada component2 yang menjadi childnya walaupun di create/update pada component child yang berbeda
// nilai/state pada context akan tereset jiga mengakses komponen lain yang tidak menggunakan context yang sama 

const Routes = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <LayoutLanding>
                        <LandingContent />
                    </LayoutLanding>
                </Route>
                <AuthenticationRoute exact path="/login">
                    <LayoutLanding>
                        <AuthProvider>
                            <AuthContent left={<LoginForm />} />
                        </AuthProvider>
                    </LayoutLanding>
                </AuthenticationRoute>
                <AuthenticationRoute exact path="/signup">
                    <LayoutLanding>
                        <AuthProvider>
                            <AuthContent right={<SignupForm />} />
                        </AuthProvider>
                    </LayoutLanding>
                </AuthenticationRoute>
                <Route exact path="/job-vacancy">
                    <LayoutLanding>
                        <JobProvider>
                            <SearchJob />
                        </JobProvider>
                    </LayoutLanding>
                </Route>
                <Route exact path="/job-vacancy/:id">
                    <LayoutLanding>
                        <JobProvider>
                            <DetailJob />
                        </JobProvider>
                    </LayoutLanding>
                </Route>
                <AuthorizedRoute exact path="/dashboard">
                    <ProfileProvider>
                        <LayoutDashboard>
                            <Dashboard />
                        </LayoutDashboard>
                    </ProfileProvider>
                </AuthorizedRoute>
                <AuthorizedRoute exact path="/dashboard/profile">
                    <ProfileProvider>
                        <LayoutDashboard>
                            <Profile />
                        </LayoutDashboard>
                    </ProfileProvider>
                </AuthorizedRoute>
                <AuthorizedRoute exact path="/dashboard/change-password">
                    <ProfileProvider>
                        <LayoutDashboard>
                            <AuthProvider>
                                <ChangePassword />
                            </AuthProvider>
                        </LayoutDashboard>
                    </ProfileProvider>
                </AuthorizedRoute>
                <AuthorizedRoute exact path="/dashboard/list-job-vacancy">
                    <ProfileProvider>
                        <LayoutDashboard>
                            <JobProvider>
                                <ListJobVacancy />
                            </JobProvider>
                        </LayoutDashboard>
                    </ProfileProvider>
                </AuthorizedRoute>
                <AuthorizedRoute exact path="/dashboard/list-job-vacancy/create">
                    <ProfileProvider>
                        <LayoutDashboard>
                            <JobProvider>
                                <JobForm />
                            </JobProvider>
                        </LayoutDashboard>
                    </ProfileProvider>
                </AuthorizedRoute>
                <AuthorizedRoute exact path="/dashboard/list-job-vacancy/edit/:id">
                    <ProfileProvider>
                        <LayoutDashboard>
                            <JobProvider>
                                <JobForm />
                            </JobProvider>
                        </LayoutDashboard>
                    </ProfileProvider>
                </AuthorizedRoute>
                <Route>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    )
}

export default Routes;