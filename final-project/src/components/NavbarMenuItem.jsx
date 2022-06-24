import { useContext } from "react";
import { NavbarContext } from "./NavbarProvider";
import { Link } from "react-router-dom";

const NavbarMenuItem = (props) => {
    const {active, handleActive} = useContext(NavbarContext)
    if(props.isButton && props.activemenu === active){
        return(
            <Link id={props.activemenu} to={props.to} onClick={handleActive} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:bg-blue-500 md:hover:bg-blue-700 md:focus:ring-blue-500 md:focus:ring-offset-blue-200 md:text-white md:w-full md:transition ease-in md:duration-200 md:text-base md:font-semibold md:shadow-md md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2  md:rounded-lg md:px-4 md:py-1">Login</ Link>
        )
    }else if(props.isButton){
        return(
            <Link id={props.activemenu} to={props.to} onClick={handleActive} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50  dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700 md:bg-blue-500 md:hover:bg-blue-700 md:focus:ring-blue-500 md:focus:ring-offset-blue-200 md:text-white md:w-full md:transition ease-in md:duration-200 md:text-base md:font-semibold md:shadow-md md:focus:outline-none md:focus:ring-2 md:focus:ring-offset-2  md:rounded-lg md:px-4 md:py-1">Login</ Link>
        )
    }
    else if(props.activemenu === active){
        return(
            <Link id={props.activemenu} to={props.to} onClick={handleActive} className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">{props.name}</ Link>
        )
    }else{
        return(
            <Link id={props.activemenu} to={props.to} onClick={handleActive} className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">{props.name}</ Link>
        )
    }
}

export default NavbarMenuItem;