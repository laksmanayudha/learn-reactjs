import React, {createContext, useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";


export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
    let history = useHistory(); // gunakan utility spt useHistory sebagai child dari <Router />
    const [daftarMahasiswa, setDaftarMahasiswa] =  useState([]);
    const [mahasiswa, setMahasiswa] = useState({name: "", course:"", score:0});
    const [curerntId, setCurrentId] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);

    const fetchData = async () => {
        let dataMahasiswa = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`);
        let {data} = dataMahasiswa;
        setDaftarMahasiswa([...data]);
    }

    const handleChange = (event) => {
        setMahasiswa({...mahasiswa, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try{
            if(curerntId === null){
                await axios.post(` https://backendexample.sanbercloud.com/api/student-scores`, mahasiswa);
            }else{
                await axios.put(` https://backendexample.sanbercloud.com/api/student-scores/${curerntId}`, mahasiswa);
                setCurrentId(null);
            }
        }catch(err){
            console.log(err.message)
        }
        setFetchStatus(true);
        setMahasiswa({name: "", course:"", score:0})
        history.push("/tugas14")
    }
    
    const handleDelete = async (event) => {
        let mhsId = event.target.value;
        try{
            await axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${mhsId}`)
        }catch(err){
            console.log(err.message)
        }
        setFetchStatus(true);
    }
    const handleEdit = async (event) => {
        let mhsId = event.target.value;
        history.push(`/tugas14/edit/${mhsId}`)
    }

    const indexOf = (score) => {
        if (score >= 80){
            return "A"
        }else if (score >= 70){
            return "B"
        }else if (score >= 60){
            return "C"
        }else if (score >= 50){
            return "D"
        }else{
            return "E"
        }
    }

    let state = {
        daftarMahasiswa, 
        setDaftarMahasiswa,
        mahasiswa,
        setMahasiswa,
        curerntId,
        setCurrentId,
        fetchStatus,
        setFetchStatus
    } 

    let handleFunction = {
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        indexOf,
        fetchData
    }

    return(
        <MahasiswaContext.Provider value={ {state, handleFunction} }>
            {props.children}
        </MahasiswaContext.Provider>
    )
}