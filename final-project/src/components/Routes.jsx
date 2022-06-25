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
                <Route exact path="/login">
                    <LayoutLanding>
                        <AuthProvider>
                            <AuthContent left={<LoginForm />} />
                        </AuthProvider>
                    </LayoutLanding>
                </Route>
                <Route exact path="/signup">
                    <LayoutLanding>
                        <AuthProvider>
                            <AuthContent right={<SignupForm />} />
                        </AuthProvider>
                    </LayoutLanding>
                </Route>
                <Route exact path="/job-vacancy">
                    <LayoutLanding>
                        <SearchJob />
                    </LayoutLanding>
                </Route>
                <Route exact path="/job-vacancy/detail">
                    <LayoutLanding>
                        <DetailJob />
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
                <Route exact path="/dashboard/list-job-vacancy/form">
                    <LayoutDashboard>
                        <JobForm />
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