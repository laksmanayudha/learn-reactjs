import { Button, ButtonNotFull, ButtonNotFullDanger } from "./Button";
import { DeleteIcon, EditIcon, SortIcon } from "./SVGIcons";

const TableJobVacancy = () => {
    return(
        <table className="table bg-white shadow rounded-lg w-full">
            <thead>
                <tr>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    #
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm text-sm font-normal text-gray-900 text-left">
                    Title
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Description
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Qualification
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Type
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Tenure
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Stetus
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Company Name
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Company Image
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Min Salary
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Max Salary
                    <SortIcon />
                </th>
                <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap text-sm font-normal text-gray-900 text-left">
                    Action
                </th>
                </tr>
            </thead>
            <tbody>
                <tr className="text-gray-700">
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        1
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jean Marc
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Louis
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        <div>
                            <ButtonNotFull>
                                <EditIcon />
                            </ButtonNotFull>
                        </div>
                        <div className="mt-1">
                            <ButtonNotFullDanger>
                                <DeleteIcon />
                            </ButtonNotFullDanger>
                        </div>
                    </td>
                </tr>             
                <tr className="text-gray-700">
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        1
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jean Marc
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Louis
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        Jl987
                    </td>
                    <td className="border-b-2 p-4 dark:border-dark-5 text-sm">
                        <div>
                            <ButtonNotFull>
                                <EditIcon />
                            </ButtonNotFull>
                        </div>
                        <div className="mt-1">
                            <ButtonNotFullDanger>
                                <DeleteIcon />
                            </ButtonNotFullDanger>
                        </div>
                    </td>
                </tr>             
            </tbody>
        </table>

    )
}

export default TableJobVacancy;