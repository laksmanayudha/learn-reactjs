import { Link } from "react-router-dom";

const DashboardHeader = () => {
    return(
        <header className="w-full shadow-lg bg-white dark:bg-gray-700 items-center h-16 rounded-2xl z-40">
            <div className="relative z-20 flex flex-col justify-center h-full px-3 mx-auto flex-center">
                <div className="relative items-center pl-1 flex justify-end w-full lg:max-w-68 sm:pr-2 sm:ml-0">
                    <div>
                        <Link to={'/'} className="hover:text-blue-500">Logout</Link>
                    </div>
                    <div className="relative p-1 flex items-center justify-end ml-5 mr-4 sm:mr-0 sm:right-auto">
                        <Link to="/dashboard/profile" className="block relative">
                            <img alt="profil" src={'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} className="mx-auto object-cover rounded-full h-10 w-10 "/>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default DashboardHeader;