import React, {createContext, useState} from "react";

export const MahasiswaContext = createContext();

export const MahasiswaProvider = (props) => {
    const [daftarMahasiswa, setDaftarMahasiswa] =  useState([]);
    const [mahasiswa, setMahasiswa] = useState({name: "", course:"", score:0});
    const [curerntId, setCurrentId] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);
    return(
        <MahasiswaContext.Provider value={ 
                {
                    daftarMahasiswa, 
                    setDaftarMahasiswa,
                    mahasiswa,
                    setMahasiswa,
                    curerntId,
                    setCurrentId,
                    fetchStatus,
                    setFetchStatus
                } 
            }>
            {props.children}
        </MahasiswaContext.Provider>
    )
}