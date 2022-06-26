import { useContext, useEffect } from "react";
import CompanyCard from "./CompanyCard";
import { JobContext } from "./JobProvider";

const SearchResult = () => {

    const {state, handleFunction} = useContext(JobContext);
    let { displayedJob, setSearch } = state;
    let { fetchJobData } = handleFunction;

    useEffect(() => {
        fetchJobData()

        return () => {
            setSearch("")
        }
    }, []);

    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center ml-6">
            {displayedJob !== undefined && displayedJob.map((item) => {
                return(
                    <CompanyCard 
                        key={item.id} 
                        title={item.title}
                        job_type={item.job_type}
                        job_status={item.job_status} 
                        company_name={item.company_name}
                        company_image_url={item.company_image_url}
                        company_city={item.company_city}
                        salary_min={item.salary_min}
                        salary_max={item.salary_max}
                        id={item.id}
                    />
                )
            })}
        </div>
    )
}

export default SearchResult;