import { useContext } from "react"
import { JobContext } from "./JobProvider"
import axios from "axios"

export const HomeIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
    )
}

export const ProfileIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    )
}

export const PasswordIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>
    )
}

export const TableIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18"/></svg>
    )
}

export const EmailIcon = () => {
    return(
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
        </path>
    </svg>
    )
}

export const LockIcon = () => {
    return(
    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z">
        </path>
    </svg>
    )
}

export const SearchIcon = () => {
    return(
        <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
    )
}

export const UpIcon = () => {
    return(
        <svg className="inline ml-2 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.2 7.8l-7.7 7.7-4-4-5.7 5.7"/><path d="M15 7h6v6"/></svg>

    )
}

export const EditIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" /><polygon points="18 2 22 6 12 16 8 16 8 12 18 2" /></svg>

    )
}
export const DeleteIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg>
    )
}

export const ImageIcone = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" width={15} height={15} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><rect x={3} y={3} width={18} height={18} rx={2} /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M20.4 14.5L16 10 4 20" /></svg>

    )
}

export const SortIcon = (props) => {

    const {state, handleFunction} = useContext(JobContext);
    const {ascending, setAscending, setDisplayedJob} = state;
    const {cleanString} = handleFunction
    const sortData = async () => {
        let key = props.name;
        
        let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`);
        let { data } = result.data;
        let newData = data;

        if(ascending){
            for(let i = 0; i < newData.length; i++){
                for(let j = i + 1; j < newData.length; j++){
                    if(typeof(newData[i][key]) === "number"){
                        if(newData[i][key] > newData[j][key]){
                            let temp = newData[i];
                            newData[i] = newData[j];
                            newData[j] = temp;
                        }
                    }else{
                        if(cleanString(newData[i][key]) > cleanString(newData[j][key])){
                            let temp = newData[i];
                            newData[i] = newData[j];
                            newData[j] = temp;
                        }
                    }
                }
            }
        }else{
            for(let i = 0; i < newData.length; i++){
                for(let j = i + 1; j < newData.length; j++){
                    if(typeof(newData[i][key]) === "number"){
                        if(newData[i][key] < newData[j][key]){
                            let temp = newData[i];
                            newData[i] = newData[j];
                            newData[j] = temp;
                        }
                    }else{
                        if(cleanString(newData[i][key]) < cleanString(newData[j][key])){
                            let temp = newData[i];
                            newData[i] = newData[j];
                            newData[j] = temp;
                        }
                    }
                }
            }
        }

        setDisplayedJob(newData)
    }

    return(
    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-sort inline ml-2 cursor-pointer" width={15} height={15} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" onClick={() => {
        if(ascending){
            setAscending(false)
        }else{
            setAscending(true)
        }
        sortData();
    }}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M3 9l4 -4l4 4m-4 -4v14" />
    <path d="M21 15l-4 4l-4 -4m4 4v-14" />
    </svg>
    )
}

export const DashboardIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layout-dashboard" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4h6v8h-6z" />
        <path d="M4 16h6v4h-6z" />
        <path d="M14 12h6v8h-6z" />
        <path d="M14 4h6v4h-6z" />
        </svg>


    )
}

export const ListIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-border-all" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <rect x={4} y={4} width={16} height={16} rx={2} />
        <line x1={4} y1={12} x2={20} y2={12} />
        <line x1={12} y1={4} x2={12} y2={20} />
        </svg>


    )
}
export const JobIcon = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-skyscraper" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1={3} y1={21} x2={21} y2={21} />
        <path d="M5 21v-14l8 -4v18" />
        <path d="M19 21v-10l-6 -4" />
        <line x1={9} y1={9} x2={9} y2="9.01" />
        <line x1={9} y1={12} x2={9} y2="12.01" />
        <line x1={9} y1={15} x2={9} y2="15.01" />
        <line x1={9} y1={18} x2={9} y2="18.01" />
        </svg>
    )
}

export const LockChange = () => {
    return(
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud-lock" width={24} height={24} viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M19 18a3.5 3.5 0 0 0 0 -7h-1c.397 -1.768 -.285 -3.593 -1.788 -4.787c-1.503 -1.193 -3.6 -1.575 -5.5 -1s-3.315 2.019 -3.712 3.787c-2.199 -.088 -4.155 1.326 -4.666 3.373c-.512 2.047 .564 4.154 2.566 5.027" />
        <rect x={8} y={15} width={8} height={5} rx={1} />
        <path d="M10 15v-2a2 2 0 1 1 4 0v2" />
        </svg>

    )
}