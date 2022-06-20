import { useContext, useEffect } from "react";
import { AppContext } from "./AppProvider";
import { Link } from "react-router-dom";

const AppList = () => {

    const {state, handleFunction} = useContext(AppContext);

    let {
        appList,
        setAppList,
        fetchStatus,
        setFetchStatus,
        appItem,
        setAppItem
    } = state

    let {
        fetchData,
        isFree,
        convertSize,
        isAndoridIOS,
        handleEdit,
        handleChange,
        handleDelete,
        handleSubmit,
        exerpt
    }  = handleFunction

    useEffect(() => {
        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }
    }, [fetchStatus])

    return(
        <div className="max-w-6xl mx-auto mt-6">
            <div className="text-center mb-6">
                <Link className="inline-block py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50 w-full" to="/mobile-form">Add new data</Link>
            </div>
            <table className="table p-4 bg-white shadow rounded-lg">
                <thead>
                    <tr>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            No
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Name
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Description
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Release Year
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Size
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Price
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Rating
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {appList !== null && (appList.map((item, index) => {
                            return (
                                <tr className="text-gray-700" key={item.id}>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {index + 1}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.name}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.description}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.release_year}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.size}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.price}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.rating}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                            <button value={item.id} onClick={handleEdit}  className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50">Edit</button>
                                            <button value={item.id} onClick={handleDelete} className="py-2 px-4  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
            </table>
            
        </div>
    )
}

export default AppList;