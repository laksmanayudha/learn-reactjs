import { useContext } from "react";
import { Link } from "react-router-dom";
import { JobContext } from "./JobProvider";

const CompanyCard = (props) => {

    const {state, handleFunction} = useContext(JobContext);
    const { isOpen } = handleFunction;

    return(
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 p-2">
        <Link to="#">
            <div className="w-full h-1/3 over p-4">
                <img className="rounded-t-lg w-full h-full object-contain" src={props.company_image_url} alt="company image" />
            </div>
        </Link>
        <div className="p-5">
            <Link to="#">
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">{props.title}</h5>
            </Link>
            <h5 className="text-lg mt-2">{props.company_name}</h5>
            <div className="mt-2">{props.company_city}</div>
            <div className="font-bold mt-2">{props.job_type}  . <span className="text-blue-500 font-normal">{isOpen(props.job_status)}</span></div>
            <p className="text-lg mt-2 mb-3 font-normal text-gray-700 dark:text-gray-400">Rp {props.salary_min} - Rp {props.salary_max}</p>
            <Link to={`/job-vacancy/${props.id}`} className="block items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            </Link>
        </div>
    </div>
    )
}

export default CompanyCard;