import Tugas10 from '../Tugas-10/App'
import Tugas11 from '../Tugas-11/App'
import Tugas12 from "../Tugas-12/App"
import Tugas13 from "../Tugas-13/App"
import "./tugas14.css";
import { MahasiswaProvider } from "./MahasiswaProvider";
import MahasiswaTable from "./MahasiswaTable";
import MahasiswaForm from "./MahasiswaForm";

import {
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from "react-router-dom";

const Routes = () => {
    return (
            // gunakan hooks spt useHistory pada child dari BrowserRouter/Router
            <Router>
                <MahasiswaProvider>
                    <header>
                        <nav>
                            <ul className='menu'>
                                <li>
                                    <Link to="/">Tugas 10</Link>
                                </li>
                                <li>
                                    <Link to="/tugas11">Tugas 11</Link>
                                </li>
                                <li>
                                    <Link to="/tugas12">Tugas 12</Link>
                                </li>
                                <li>
                                    <Link to="/tugas13">Tugas 13</Link>
                                </li>
                                <li>
                                    <Link to="/tugas14">Tugas 14</Link>
                                </li>
                            </ul>
                        </nav>
                    </header>

                    <Switch>
                        <Route exact path="/" component={Tugas10} />
                        <Route path="/tugas11" component={Tugas11} />
                        <Route path="/tugas12">
                            <Tugas12 />
                        </Route>
                        <Route path="/tugas13">
                            <Tugas13 />
                        </Route>
                        <Route exact path="/tugas14">
                            <MahasiswaTable />
                        </Route>
                        <Route path="/tugas14/create">
                            <MahasiswaForm />
                        </Route>
                        <Route path="/tugas14/edit/:id">
                            <MahasiswaForm />
                        </Route>
                    </Switch>
                </MahasiswaProvider>
            </Router>
    );
}

export default Routes;