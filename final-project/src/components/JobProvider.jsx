import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const JobContext = createContext();
export const JobProvider = (props) => {

    const history = useHistory();
    const [fetchStatus, setFetchStatus] = useState(true)
    const [allJob, setAllJob] = useState([]);
    const [displayedJob, setDisplayedJob] = useState([]);
    const [currentJobID, setCurrentJobID] = useState(null);
    const [isCreate, setIsCreate]  = useState(false)
    const [isUpdate, setIsUpdate]  = useState(false)
    const [isDelete, setIsDelete]  = useState(false)
    const [ascending, setAscending] = useState(false)

    const [job, setJob] = useState({
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
    });
    const [search, setSearch] = useState("");
    const [filter, setFilter] = useState({
        company_city:" ",
        company_name:" ",
        salary_min:0
    })
    const [jobType, setJobType] = useState([
        "Kontrak",
        "Full-Time",
        "PKWT",
        "Part-Time",
        "Internship"
    ])

    const [jobTenure, setJobTenure] = useState([
        "On-Site",
        "Work From Home",
        "Hybrid"
    ])
    const [jobStatus, setJobStatus] = useState([
        {
            title: "Open",
            value: 1
        },
        {
            title: "Close",
            value: 0
        }
    ])
    const [companyCity, setCompanyCity] = useState(['Choose Option'])
    const [companyName, setCompanyName] = useState(['Choose Option'])

    const fetchJobData = async () => {
        try{
            let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`);
            let { data } = result.data;
            setCompanyCity([...companyCity, ...fillInput("company_city", data)])
            setCompanyName([...companyName, ...fillInput("company_name", data)])
            setAllJob(data);
            setDisplayedJob(data);
        }catch(err){
            console.log(err.message)
        }
    }

    const fetchDetailJobData = async (id) => {
        try{
            let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`);
            let data  = result.data
            setJob(data);
        }catch(err){
            console.log(err.message)
        }
    }

    const isOpen = (job_status) => {
        if(job_status){
            return "Open";
        }else{
            return "Close";
        }
    }

    const cleanString = (text) => {
        return text.trim().toLowerCase();
    }

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmitSearch = (event) => {
        event.preventDefault();
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
         .then(res => {
            let { data } = res.data;
            let newData = data;

            if(search !== ""){
                newData = data.filter((item) => {
                    return cleanString(item.title).includes(cleanString(search))
                })
            }
            setDisplayedJob(newData)
         })
         .catch(err => {
            console.log(err.message)
         })
    }

    const handleFilterChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setFilter({...filter, [name]:value})
        
    }

    const handleSubmitFilter = (event) => {
        event.preventDefault();
        axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`)
         .then(res => {
            let { data } = res.data;
            let newData = data;
            if(filter.company_name !== "" && filter.company_name !== "Choose Option"){
                newData = newData.filter(item => {
                    return cleanString(item.company_name).includes(cleanString(filter.company_name))
                })
            }

            if(filter.company_city !== "" && filter.company_city !== "Choose Option"){
                newData = newData.filter(item => {
                    return cleanString(item.company_city).includes(cleanString(filter.company_city))
                })
            }

            if(filter.salary_min !== ""){
                newData = newData.filter(item => {
                    return parseInt(item.salary_min) >= parseInt(filter.salary_min)
                })
            }else{
                let min = 0;
                newData = newData.filter(item => {
                    return parseInt(item.salary_min) >= min
                })
            }

            setDisplayedJob(newData)
         })
         .catch(err => {
            console.log(err.message)
         })
    }

    const handleFormChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setJob({...job, [name]: value})
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        if( Cookies.get('token') !== undefined ){

            // submit create
            if(currentJobID === null){
                let token = Cookies.get('token');
                axios.post(`https://dev-example.sanbercloud.com/api/job-vacancy`, 
                    job,
                    {
                        'headers': {
                            'Authorization' : `Bearer ${token}`
                        }
                    }
                )
                 .then(res => {
                    setFetchStatus(true);
                    setIsCreate(true);
                    setTimeout(() => setIsCreate(false), 3000)
                    history.push('/dashboard/list-job-vacancy')
                 })
                 .catch(err => {
                    console.log(err.message)
                 })
            }
            // submit edit
            else{
                let token = Cookies.get('token');
                axios.put(`https://dev-example.sanbercloud.com/api/job-vacancy/${currentJobID}`, 
                    job,
                    {
                        'headers': {
                            'Authorization' : `Bearer ${token}`
                        }
                    }
                )
                 .then(res => {
                    setFetchStatus(true)
                    setCurrentJobID(null)
                    setIsUpdate(true);
                    setTimeout(() => setIsUpdate(false), 3000)
                    history.push('/dashboard/list-job-vacancy')
                 })
                 .catch(err => {
                    console.log(err.message)
                 })
            }

            // clear form input
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
    }

    const handleFormDelete = (event) => {
        event.preventDefault();
        if( Cookies.get('token') !== undefined ){
            let token = Cookies.get('token');
            let jobId = event.currentTarget.value;
            axios.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${jobId}`, 
                {
                    'headers': {
                        'Authorization' : `Bearer ${token}`
                    }
                }
            )
             .then(res => {
                setIsDelete(true);
                setTimeout(() => setIsDelete(false), 3000)
                setFetchStatus(true)
             })
             .catch(err => {
                console.log(err.message)
             })
        }

    }

    const handleFormEdit = (event) => {
        let jobId = event.currentTarget.value;
        history.push(`/dashboard/list-job-vacancy/edit/${jobId}`);
    }

    const fillInput = (name, data) => {

        let newData = []
        data.forEach(item => {
            if( !newData.includes(item[name]) ){
                newData.push(item[name])
            }
        })

        return(newData)

    }

    let state = {
        allJob, setAllJob,
        displayedJob, setDisplayedJob,
        job, setJob,
        search, setSearch,
        filter, setFilter,
        jobType, setJobType,
        jobTenure, setJobTenure,
        jobStatus, setJobStatus,
        fetchStatus, setFetchStatus,
        currentJobID, setCurrentJobID,
        isCreate, setIsCreate,
        isUpdate, setIsUpdate,
        isDelete, setIsDelete,
        companyCity, setCompanyCity,
        companyName, setCompanyName,
        ascending, setAscending
    }

    let handleFunction = {
        handleSearchChange, handleSubmitSearch,
        handleFilterChange, handleSubmitFilter,
        fetchJobData, isOpen, fetchDetailJobData,
        handleFormChange, handleSubmitForm,
        handleFormDelete, handleFormEdit,
        fillInput, cleanString
    }

    return(
        <JobContext.Provider value={ {state, handleFunction} }>
            {props.children}
        </JobContext.Provider>
    )
}