import axios from "axios";
import { useContext } from "react";
import { MahasiswaContext } from "./MahasiswaProvider";

const MahasiswaTable = () => {
    const {
        daftarMahasiswa, 
        setDaftarMahasiswa,
        mahasiswa,
        setMahasiswa,
        curerntId,
        setCurrentId,
        fetchStatus,
        setFetchStatus
    } = useContext(MahasiswaContext);

    const handleDelete = async (event) => {
        let mhsId = event.target.value;
        // axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${mhsId}`)
        //  .then((res) => {
        //     setFetchStatus(true)
        //  })
        await axios.delete(`https://backendexample.sanbercloud.com/api/student-scores/${mhsId}`)
        setFetchStatus(true);
    }
    const handleEdit = async (event) => {
        let mhsId = event.target.value;
        let { data } = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores/${mhsId}`);
        setMahasiswa(data);
        setCurrentId(data.id)
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

    return(
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