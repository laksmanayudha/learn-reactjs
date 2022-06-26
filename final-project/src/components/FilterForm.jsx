import { useContext } from "react";
import { Button, ButtonDanger } from "./Button";
import { InputFormData2 } from "./InputForm"
import { JobContext } from "./JobProvider";

const FilterForm = () => {

    const {state, handleFunction} = useContext(JobContext);
    const {
        setFilter,
        filter
    } = state
    let {
        handleSubmitFilter,
        handleFilterChange
    } = handleFunction

    return (
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                        Filters criteria
                        </span>
                    </div>
                </div>
                <div className="mt-6">
                <div className="w-full space-y-6">
                    <form onSubmit={handleSubmitFilter}>
                        <div>
                            <label className="text-gray-500">Company Name</label>
                            <InputFormData2 type="text" name="company_name" placeholder="Company Name" handleFunction={handleFilterChange} value={filter.company_name}/>
                        </div>
                        <br />
                        <div>
                            <label className="text-gray-500">Company City</label>
                            <InputFormData2 type="text" name="company_city" placeholder="Company City" handleFunction={handleFilterChange} value={filter.company_city}/>
                        </div>
                        <br />
                        <div>
                        <label className="text-gray-500">Minimal Salary</label>
                            <InputFormData2 type="number" name="salary_min" placeholder="" handleFunction={handleFilterChange} value={filter.salary_min}/>
                        </div>
                        <br />
                        <Button name="Find"/>

                        {/* ini bisa reset, terus nampilin semua data karena buttonnya juga mentriger/mensubmit (type buttonnya 'submit') form, lalu mentriger event listener yang fetch data semuanya */}
                        <div className="mt-2">
                            <ButtonDanger name="Reset" handleFunction={() => {setFilter({...filter, company_city:" ", company_name:" ", salary_min:0})}}/>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                This data are display for information and can change
                </p>
            </div>
        </div>
    )
}

export default FilterForm;