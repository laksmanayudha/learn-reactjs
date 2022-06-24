import YuKerjaLogo from "../YuKerja_logo.png"
import { Link } from "react-router-dom";
import { NavbarProvider } from "./NavbarProvider";
import NavbarMenuItem from "./NavbarMenuItem";

const Navbar = () => {
    return(
        <NavbarProvider>
            <header className="md:fixed md:left-0 md:right-0 md:top-0 md:z-30 m-0 px-6 py-3 bg-white">
                <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <a href="" className="flex items-center">
                        <img src={YuKerjaLogo} className="mr-3 h-6 sm:h-9" alt="Yuk Kerja Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Yuk Kerja</span>
                        </a>
                        <button data-collapse-toggle="mobile-menu" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                        <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                        </button>
                        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                        <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                            <li>
                                <NavbarMenuItem name="Home" to="/" activemenu="1"/>
                            </li>
                            <li>
                                <NavbarMenuItem name="Job Vacancy" to="/job-vacancy" activemenu="2"/>
                            </li>
                            <li>
                                <NavbarMenuItem name="Sign up" to="/signup" activemenu="3"/>
                            </li>
                            <li>
                                <NavbarMenuItem name="Login" to="/login" activemenu="4" isButton />
                            </li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </NavbarProvider>
    )
}


export default Navbar;