import { useContext, useEffect } from "react";
import { MahasiswaContext } from "./MahasiswaProvider";
import {Link} from "react-router-dom";

const MahasiswaTable = () => {
    const {state, handleFunction,} = useContext(MahasiswaContext);
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

    useEffect(() => {

        if(fetchStatus){
            console.log('fetch data') // sekali fetch data dengan if
            fetchData();
            setFetchStatus(false);
        }
    }, [fetchStatus]);

    return(
        <div className="app">
            <h1>Daftar Nilai Mahasiswa</h1>
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
                <Link className="btn edit" style={{ textDecoration: "none"}} to="/tugas14/create">Add new data</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Nama</th>
                        <th>Mata Kuliah</th>
                        <th>Nilai</th>
                        <th>Indeks Nilai</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        daftarMahasiswa.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.course}</td>
                                    <td>{item.score}</td>
                                    <td>{indexOf(item.score)}</td>
                                    <td className="action">
                                        <button value={item.id} onClick={handleEdit} className="btn edit">Edit</button>
                                        <button value={item.id} onClick={handleDelete} className="btn delete">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default MahasiswaTable;