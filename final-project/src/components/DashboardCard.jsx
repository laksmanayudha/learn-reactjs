import { Link } from "react-router-dom";

const DashboardCard = (props) => {
    return(
        <div className="w-full p-6 lg:max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <Link to={props.to}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{props.name}</h5>
            </Link>
            <p className="mb-3 font-normal text-lg text-gray-700 dark:text-gray-400">{props.description}</p>
            <Link to={props.to} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {props.buttondesc}
            </Link>
        </div>

    )
}

export default DashboardCard;