import axios from "axios";
import { useContext, useEffect } from "react";
import { MahasiswaContext } from "./MahasiswaProvider";
import {Link, useParams} from "react-router-dom";

const MahasiswaForm = () => {
    const { id } = useParams()
    const {state, handleFunction} = useContext(MahasiswaContext);
    const {
        daftarMahasiswa, 
        setDaftarMahasiswa,
        mahasiswa,
        setMahasiswa,
        curerntId,
        setCurrentId,
        fetchStatus,
        setFetchStatus
    } = state;

    const {
        handleChange,
        handleSubmit,
        handleDelete,
        handleEdit,
        indexOf,
        fetchData
    } = handleFunction;

    useEffect( () => { // jgn pake async di callback useEffect
        if ( id !== undefined ){
            axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${id}`).then((res) => {
                let {data} = res
                setMahasiswa(data);
                setCurrentId(data.id)
            })
        }

        // componentWillUnMount
        // digunakan jika klik edit, kembali, klik add, agar form kosong kembali
        return () => {
            console.log("unmount")
            setMahasiswa({name: "", course:"", score:0})
            setCurrentId(null) // reset agar id edit tidak disimpan, dan tidak terbawa saat proses create
        }
    }, [])

    return(
        <div className="form-container app">
            <h1>Form Nilai Mahasiswa</h1>
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
                <Link className="" style={{ textDecoration: "none"}} to="/tugas14">back to Daftar Mahasiswa</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-item">
                    <label htmlFor="name">Nama:</label>
                    <input type="text" name="name" onChange={handleChange} value={mahasiswa.name} required/>
                </div>
                <div className="input-item">
                    <label htmlFor="course">Mata Kuliah:</label>
                    <input type="text" name="course" onChange={handleChange} value={mahasiswa.course} required/>
                </div>
                <div className="input-item">
                    <label htmlFor="score" >Nilai:</label>
                    <input type="number" name="score" min="0" max="100" step="any" onChange={handleChange} value={mahasiswa.score} required/>
                </div>
                <div className="input-item buttonSubmit">
                    <button className="btn submit">submit</button>
                </div>
            </form>
        </div>
    )
}

export default MahasiswaForm;