import { useContext, useEffect } from "react";
import { ButtonNotFull, ButtonNotFullDanger } from "./Button";
import { JobContext } from "./JobProvider";
import { DeleteIcon, EditIcon, SortIcon } from "./SVGIcons";

const TableJobVacancy = () => {

    const { state, handleFunction } = useContext(JobContext);
    const {displayedJob, fetchStatus, setFetchStatus} = state
    const {fetchJobData, isOpen, handleFormDelete, handleFormEdit} = handleFunction

    const excerpt = (text) => {
        text = text.split(" ").splice(0, 5).join(" ") + " ..."
        return text
    }

    useEffect(() => {
        
        if(fetchStatus){
            fetchJobData();
            setFetchStatus(false);
        }
        
    }, [fetchStatus])

    return(
    <div className="overflow-x-auto shadow rounded-lg p-8">
        <table className="table bg-white">
            <thead>
                <tr>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    #
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm text-sm font-normal text-gray-900 text-left">
                    Title
                    <SortIcon name="title"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Description
                    <SortIcon name="job_description"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Qualification
                    <SortIcon name="job_qualification"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Type
                    <SortIcon name="job_type"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Tenure
                    <SortIcon name="job_tenure"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    City
                    <SortIcon name="company_city"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Status
                    <SortIcon name="job_status"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Company Name
                    <SortIcon name="company_name"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Company Image
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Min Salary
                    <SortIcon name="salary_min"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Max Salary
                    <SortIcon name="salary_max"/>
                </th>
                <th className="border-b-2 px-2 py-2 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                {displayedJob !== undefined &&
                    displayedJob.map((item, index) => {
                        return(
                            <tr className="text-gray-700" key={item.id}>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {index + 1}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.title}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {excerpt(item.job_description)}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {excerpt(item.job_qualification)}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.job_type}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.job_tenure}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.company_city}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    <span className={`bg-${item.job_status === 1 ? 'blue' : 'rose'}-600 text-white p-2 rounded-2xl`}>{isOpen(item.job_status)}</span>
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.company_name}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    <img src={item.company_image_url} alt="" />
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.salary_min}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    {item.salary_max}
                                </td>
                                <td className="border-b-2 p-1 dark:border-dark-5 text-sm">
                                    <div>
                                        <ButtonNotFull handleFunction={handleFormEdit} value={item.id}>
                                            <EditIcon />
                                        </ButtonNotFull>
                                    </div>
                                    <div className="mt-1">
                                        <ButtonNotFullDanger handleFunction={handleFormDelete} value={item.id}>
                                            <DeleteIcon />
                                        </ButtonNotFullDanger>
                                    </div>
                                </td>
                            </tr>
                        )
                    })
                } 
                         
            </tbody>
        </table>
    </div>           
    )
}

export default TableJobVacancy;