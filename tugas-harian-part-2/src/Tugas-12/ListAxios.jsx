import axios from "axios";
import {useEffect, useState} from "react";
import "./tugas12.css";

const ListAxios = () => {
    const [daftarMahasiswa, setDaftarMahasiswa] = useState([]);
    const [mahasiswa, setMahasiswa] = useState({name: "", course:"", score:0});
    const [curerntId, setCurrentId] = useState(null);
    const [fetchStatus, setFetchStatus] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            let dataMahasiswa = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`);
            let {data} = dataMahasiswa;
            setDaftarMahasiswa([...data]);
        }

        if(fetchStatus){
            fetchData();
            setFetchStatus(false);
        }
        
    }, [fetchStatus]);

    const handleChange = (event) => {
        setMahasiswa({...mahasiswa, [event.target.name]: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(curerntId === null){
            axios.post(` https://backendexample.sanbercloud.com/api/student-scores`, mahasiswa)
             .then((res) => {
                setFetchStatus(true);
             })
             .catch((err) => {
                console.log(err)
             })
        }else{

        }
        setMahasiswa({name: "", course:"", score:0})
    }
    // const handleDelete = (event) => {
    //     let index = parseInt(event.target.value);
    //     let newDaftarBuah = daftarBuah.filter((item, i) => {
    //         return i !== index;
    //     });
    //     setDaftarBuah(newDaftarBuah);
    // }
    // const handleEdit = (event) => {
    //     let index = parseInt(event.target.value);
    //     setItem(daftarBuah[index]);
    //     setCurrentIndex(index);
    // }

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

    return(
        <>
            <div className="table">
                <h1>Daftar Nilai Mahasiswa</h1>
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
                                            <button value={item.id} onClick={() => {}} className="btn edit">Edit</button>
                                            <button value={item.id} onClick={() => {}} className="btn delete">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="form-container">
                <h1>Form Nilai Mahasiswa</h1>
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
        </>
    )
}

export default ListAxios;