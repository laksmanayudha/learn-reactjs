import { InputFormWithLabel, RadioForm, SelectForm, TextAreaForm } from "./InputForm";
import { Button } from "./Button";

const JobForm = (props) => {
    return(
        <div className="p-10 bg-white rounded">
            <h1 className="font-bold font-normal text-3xl mb-6">Job Form</h1>
            <form>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="w-full">
                        <InputFormWithLabel label="Job Title" type="text" name="title" placeholder="Input job title.."/>
                        <InputFormWithLabel label="Job Tenure" type="text" name="job_tenure" placeholder="Input job tenure.."/>
                        <TextAreaForm label="Job Description" name="job_description" placeholder="Input job description" />
                        <TextAreaForm label="Job Qualification" name="job_qualification" placeholder="Input job qualification" />
                        <SelectForm label="Job Type" name="job_type" />
                        <RadioForm label="Job Status" name="job_status" nameOne="Open" nameTwo="Closed"/>
                        <hr className="my-4 md:hidden" />
                    </div>
                    <div className="w-full">
                        <InputFormWithLabel label="Company Name" type="text" name="company_name" placeholder="Input company name.."/>
                        <InputFormWithLabel label="Company City" type="text" name="company_city" placeholder="Input company city.."/>
                        <InputFormWithLabel label="Company Image URL" type="text" name="company_image_url" placeholder="Input company image url.."/>
                        <InputFormWithLabel label="Min Salary" type="number" name="salary_min" placeholder="Input minimum salary.."/>
                        <InputFormWithLabel label="Max Salary" type="number" name="salary_max" placeholder="Input maximum salary.."/>
                        <Button name="Create job" />
                    </div>
                </div>
            </form>            
        </div>
    )
}

export default JobForm;