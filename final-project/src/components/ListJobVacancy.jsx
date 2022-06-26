import TableJobVacancy from "./TableJobVacancy";
import { Button, ButtonDanger, ButtonNotFull, ButtonNotFullDanger } from "./Button";
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
        setFilter,
        filter
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
                        <SelectForm label="Company City" name="company_city" values={companyCity} handleFunction={handleFilterChange} value={filter.company_city}/>
                    </div>
                    <div className="w-full">
                        <SelectForm label="Company Name" name="company_name" values={companyName} handleFunction={handleFilterChange} value={filter.company_name}/>
                    </div>
                    <div className="w-full flex flex-col md:flex-row gap-2 items-center">
                        <div className="w-full md:flex md:items-center">
                            <label className="w-32">Min salary</label>
                            <InputFormData2 type="number" name="salary_min" placeholder="Minimal Salary" handleFunction={handleFilterChange} value={filter.salary_min}/>
                        </div>
                        <div className="w-full ml-2 md:w-20">
                            <Button name="Filter" />
                        </div>
                        {/* ini bisa reset, terus nampilin semua data karena buttonnya juga mentriger/mensubmit (type buttonnya 'submit') form, lalu mentriger event listener yang fetch data semuanya */}
                        <div className="w-full ml-2 md:w-20">
                            <ButtonDanger name="Reset" handleFunction={() => {setFilter({...filter, company_city:" ", company_name:" ", salary_min:0})}}/>
                        </div>
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
        {isCreate && <div className="fixed bottom-4 w-2/12"><SuccesAlert title="Success" message="success create data"/></div>}
        {isUpdate && <div className="fixed bottom-4 w-2/12"><SuccesAlert title="Success" message="success updating data"/></div>}
        {isDelete && <div className="fixed bottom-4 w-2/12"><DangerAlert title="Success" message="success deleting data"/></div>}
    </div>
    )
}

export default ListJobVacancy;