import { InputFormWithLabel, RadioForm, SelectForm, TextAreaForm } from "./InputForm";
import { ButtonNotFullDanger, ButtonNotFull } from "./Button";
import { useContext, useEffect } from "react";
import { JobContext } from "./JobProvider";
import { useHistory, useParams } from "react-router-dom";

const JobForm = (props) => {

    const { id } = useParams();
    const history = useHistory();
    const {state, handleFunction} = useContext(JobContext);
    const {
        jobType, 
        jobTenure, 
        job, 
        jobStatus, 
        setJob,
        setCurrentJobID
    } = state;
    const {
        handleFormChange, 
        handleSubmitForm, 
        fetchDetailJobData,
    } = handleFunction

    useEffect(() => {

        if( id !== undefined ){
            fetchDetailJobData(id);
            setCurrentJobID(id);
        }

        return () => {
            setJob({
                company_city: "",
                company_image_url: "",
                company_name: "",
                job_description: "",
                job_qualification: "",
                job_status: 1,
                job_tenure: "On-Site",
                job_type: "Full-Time",
                salary_max: 0,
                salary_min: 0,
                title: "",
            })
        }
    }, [])

    return(
        <div className="p-10 bg-white rounded">
            <h1 className="font-bold font-normal text-3xl mb-6">Job Form</h1>
            <form onSubmit={handleSubmitForm}>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="w-full">
                        <InputFormWithLabel label="Job Title" type="text" name="title" placeholder="Input job title.." handleFunction={handleFormChange} value={job.title}/>
                        <SelectForm label="Job Tenure" name="job_tenure" values={jobTenure} handleFunction={handleFormChange} selected={job.job_tenure}/>
                        <TextAreaForm label="Job Description" name="job_description" placeholder="Input job description" handleFunction={handleFormChange} value={job.job_description}/>
                        <TextAreaForm label="Job Qualification" name="job_qualification" placeholder="Input job qualification" handleFunction={handleFormChange} value={job.job_qualification}/>
                        <SelectForm label="Job Type" name="job_type" values={jobType} handleFunction={handleFormChange} selected={job.job_type}/>
                        <RadioForm label="Job Status" name="job_status" values={jobStatus} handleFunction={handleFormChange} checked={job.job_status}/>
                        <hr className="my-4 md:hidden" />
                    </div>
                    <div className="w-full">
                        <InputFormWithLabel label="Company Name" type="text" name="company_name" placeholder="Input company name.." handleFunction={handleFormChange} value={job.company_name}/>
                        <InputFormWithLabel label="Company City" type="text" name="company_city" placeholder="Input company city.." handleFunction={handleFormChange} value={job.company_city}/>
                        <InputFormWithLabel label="Company Image URL" type="text" name="company_image_url" placeholder="Input company image url.." handleFunction={handleFormChange} value={job.company_image_url}/>
                        <InputFormWithLabel label="Min Salary" type="number" name="salary_min" placeholder="Input minimum salary.." handleFunction={handleFormChange} value={job.salary_min}/>
                        <InputFormWithLabel label="Max Salary" type="number" name="salary_max" placeholder="Input maximum salary.." handleFunction={handleFormChange} value={job.salary_max}/>
                        <div className="flex justify-end gap-2">
                            <ButtonNotFullDanger name="Cancel" handleFunction={() => history.push("/dashboard/list-job-vacancy")}/>
                            <ButtonNotFull name="Save" />
                        </div>
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default JobForm;