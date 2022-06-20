import axios from "axios";
import { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

export const AppContext = createContext()
export const AppProvider = (props) => {

    let history = useHistory()
    const [appList, setAppList] = useState([]);
    const [fetchStatus, setFetchStatus] = useState(true);
    const [appItem, setAppItem] = useState({
        "name": "",
        "description": "",
        "category": "",
        "size": 0,
        "price": 0,
        "rating": 0,
        "image_url": "",
        "release_year": 2007,
        "is_android_app": true,
        "is_ios_app": true
    })
    const [curerntId, setCurrentId] = useState(null);
    const [search, setSearch] = useState("")

    const fetchData = async () => {
        console.log("fetching data")
        let { data } = await axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps`)
        setAppList(data)
    }

    const isFree = (price) => {
        return price === 0 ? "Free" : `Rp. ${price}`
    }

    const convertSize = (size) => {
        if (size >= 1000){
            return `${size/1000} GB`
        }else{
            return `${size} MB`
        }
    }

    const isAndoridIOS = (isAndroid, isIOS) => {
        if (isAndroid && isIOS){
            return "Android & IOS"
        }else if(isAndroid){
            return "Android"
        }else if(isIOS){
            return "IOS"
        }else{
            return "UNKNOWN"
        }
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            if(curerntId === null){
                await axios.post(` https://backendexample.sanbercloud.com/api/mobile-apps`, appItem);
            }else{
                await axios.put(` https://backendexample.sanbercloud.com/api/mobile-apps/${curerntId}`, appItem);
                setCurrentId(null);
            }
        }catch(err){
            console.log(err.message)
        }
        setFetchStatus(true);
        setAppItem({
            "name": "",
            "description": "",
            "category": "",
            "size": 0,
            "price": 0,
            "rating": 0,
            "image_url": "",
            "release_year": 2007,
            "is_android_app": true,
            "is_ios_app": true
        })
        history.push("/mobile-list")
        
    }
    const handleEdit = (event) => {
        let id = event.target.value;
        history.push(`/mobile-form/edit/${id}`)
    }
    const handleDelete = async (event) => {
        let id = event.target.value;
        try{
            await axios.delete(`https://backendexample.sanbercloud.com/api/mobile-apps/${id}`)
        }catch(err){
            console.log(err.message)
        }
        setFetchStatus(true);
    }
    const handleChange = (event) => {
        setAppItem({...appItem, [event.target.name]: event.target.value})
    }

    const exerpt = (desc) => {
        return desc.split(" ").slice(10).join(" ")
    }

    const fetchSearch = (key) => {
        let filterData = appList.filter((el) => {
            return el.name === key
        })
        setAppList(filterData);
    }

    let state = {
        appList,
        setAppList,
        fetchStatus,
        setFetchStatus,
        appItem,
        setAppItem,
        curerntId,
        setCurrentId,
        search,
        setSearch
    }

    let handleFunction = {
        fetchData,
        isFree,
        convertSize,
        isAndoridIOS,
        handleEdit,
        handleChange,
        handleDelete,
        handleSubmit,
        fetchSearch
    }

    return(
        <AppContext.Provider value={ {state, handleFunction} }>
            {props.children}
        </AppContext.Provider>
    )
}