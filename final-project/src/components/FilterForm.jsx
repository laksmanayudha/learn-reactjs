import { Button } from "./Button";
import { InputFormData2 } from "./InputForm"

const FilterForm = () => {
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
                    <InputFormData2 type="text" name="company_city" placeholder="Company City" />
                    <InputFormData2 type="text" name="company_name" placeholder="Company Name" />
                    <InputFormData2 type="text" name="salary_min" placeholder="Minimal Salary" />
                    <Button name="Find"/>
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