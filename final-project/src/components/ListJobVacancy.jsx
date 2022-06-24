import TableJobVacancy from "./TableJobVacancy";
import { Button, ButtonNotFull } from "./Button";
import SearchForm from "./SearchForm";
import { InputFormData2, SelectForm } from "./InputForm";

const ListJobVacancy = () => {
    return(
    <div className="container bg-white rounded h-full">
        <div className="p-4 w-full">
            <div className="flex flex-col md:flex-row justify-start items-center">
                <div className="w-full md:w-4/12">
                    <SelectForm label="Company City" name="company_city" />
                </div>
                <div className="w-full md:w-4/12">
                    <SelectForm label="Company Name" name="company_name" />
                </div>
                <div className="w-full md:w-4/12 flex items-center mt-2">
                    <label className="w-32">Min salary</label>
                    <InputFormData2 type="text" name="salary_min" placeholder="Minimal Salary" />
                    <span className="mr-2"></span>
                    <ButtonNotFull name="Filter" />
                </div>
            </div>
            <hr className="my-4"/>
            <div className="mb-2 flex flex-wrap md:justify-between">
                <div className="w-full md:w-2/6">
                    <SearchForm />
                </div>
                <div>
                    <ButtonNotFull name="Create new data" />
                </div>
            </div>
            <TableJobVacancy />
        </div>
    </div>
    )
}

export default ListJobVacancy;