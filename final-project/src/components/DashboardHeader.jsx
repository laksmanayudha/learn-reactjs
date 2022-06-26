import Cookies from "js-cookie";
import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { ProfileContext } from "./ProfileProvider";

const DashboardHeader = () => {

    const {userProfile} = useContext(ProfileContext)

    const history = useHistory();
    const handleLogout = () => {
        Cookies.remove('token');
        Cookies.remove('user');
        history.push("/");
    }

    return(
        <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex justify-end w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div>
                        <Link to={'#'} onClick={handleLogout} className="hover:text-blue-500">Logout</Link>
                    </div>
                    <div className="relative p-1 flex items-center justify-end ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <Link to="/dashboard/profile" className="block relative">
                            <img alt="profil" src={userProfile.image_url} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader;