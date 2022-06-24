import { Link } from "react-router-dom";

const SidebarItem = (props) => {
    return(
    <Link className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" to={props.to}>
        <span className="text-left">
            {props.icon}
        </span>
        <span className="mx-4 text-sm font-normal">
            {props.name}
        </span>
    </Link>
    )
}

export default SidebarItem;