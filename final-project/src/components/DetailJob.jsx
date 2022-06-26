import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { JobContext } from "./JobProvider";

const DetailJob = (props) => {

    const { id } = useParams()
    const { state, handleFunction } = useContext(JobContext);
    const { job } = state;
    const { fetchDetailJobData, isOpen } = handleFunction;

    useEffect(() => {
        if(id !== undefined){
            fetchDetailJobData(id);
        }
    }, [])

    return(
        <main className="p-10 mt-20">
            <div className="flex flex-wrap">
                <div className="bg-transparent w-full h-full shadow-2xl md:w-1/2 rounded-xl p-6">
                    <img className="w-full object-cover " src={job.company_image_url} alt="company image" />
                </div>
                <div className="w-full mt-4 md:w-1/2 py-2 px-10">
                    <h1 className="font-bold text-4xl">{job.title}</h1>
                    <h3 className="text-2xl mt-2">{job.company_name}</h3>
                    <div className="mt-2">{job.company_city}</div>
                    <div className="mt-2">{job.job_tenure}</div>
                    <div className="font-bold mt-2">{job.job_type}  . <span className="text-blue-500 font-normal">{isOpen(job.job_status)}</span></div>
                    <p className="font-bold text-xl mt-2">Rp {job.salary_min} - Rp {job.salary_max}</p>
                </div>
            </div>
            <div className="p-4">
                <hr className="my-4" />
                <h3 className="text-xl font-bold mt-4">Job description</h3>
                <p>{job.job_description}</p>
                <h3 className="text-xl font-bold mt-4">Job qualification</h3>
                <p>{job.job_qualification}</p>
            </div>
        </main>
    )
}

export default DetailJob;