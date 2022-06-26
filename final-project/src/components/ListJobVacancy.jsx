import TableJobVacancy from "./TableJobVacancy";
import { Button, ButtonNotFull } from "./Button";
import SearchForm from "./SearchForm";
import { InputFormData2, SelectForm } from "./InputForm";
import { useHistory } from "react-router-dom";
import { DangerAlert, SuccesAlert } from "./Alert";
import { useContext } from "react";
import { JobContext } from "./JobProvider";
import { useEffect } from "react";

const ListJobVacancy = () => {

    const history = useHistory();
    const {state, handleFunction} = useContext(JobContext);
    const {
        isCreate,
        isUpdate,
        isDelete,
        companyCity,
        companyName,
    } = state

    const {
        handleSubmitSearch,
        handleSearchChange,
        handleSubmitFilter,
        handleFilterChange
    } = handleFunction


    return(
    <div className="bg-white rounded">
        <div className="p-2 w-full">
            <div className="px-4">
                <form onSubmit={handleSubmitFilter} className="flex flex-col md:flex-row justify-between items-center">
                    <div className="w-full">
                        <SelectForm label="Company City" name="company_city" values={companyCity} handleFunction={handleFilterChange}/>
                    </div>
                    <div className="w-full">
                        <SelectForm label="Company Name" name="company_name" values={companyName} handleFunction={handleFilterChange}/>
                    </div>
                    <div className="w-full flex items-center">
                        <label className="w-32">Min salary</label>
                        <InputFormData2 type="number" name="salary_min" placeholder="Minimal Salary" handleFunction={handleFilterChange}/>
                        <span className="mr-2"></span>
                        <ButtonNotFull name="Filter" />
                    </div>
                </form>
            </div>
            <hr className="my-4"/>
            <div className="mb-2 flex flex-wrap md:justify-between">
                <div className="w-full md:w-2/6">
                    <SearchForm handleSubmit={handleSubmitSearch} handleChange={handleSearchChange} name="search" />
                </div>
                <div>
                    <ButtonNotFull name="Create new data" handleFunction={() => history.push("/dashboard/list-job-vacancy/create")}/>
                </div>
            </div>
            <TableJobVacancy />
        </div>
        {isCreate && <div className="fixed bottom-10 w-2/12"><SuccesAlert title="Success" message="success create data"/></div>}
        {isUpdate && <div className="fixed bottom-10 w-2/12"><SuccesAlert title="Success" message="success updating data"/></div>}
        {isDelete && <div className="fixed bottom-10 w-2/12"><DangerAlert title="Success" message="success deleting data"/></div>}
    </div>
    )
}

export default ListJobVacancy;