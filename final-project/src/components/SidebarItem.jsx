const SidebarItem = (props) => {
    return(
    <a className="w-full font-thin uppercase text-gray-500 dark:text-gray-200 flex items-center p-4 my-2 transition-colors duration-200 justify-start hover:text-blue-500" href="#">
        <span className="text-left">
            {props.icon}
        </span>
        <span className="mx-4 text-sm font-normal">
            {props.name}
        </span>
    </a>
    )
}

export default SidebarItem;