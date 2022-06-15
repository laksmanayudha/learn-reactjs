import axios from "axios";
import { useEffect } from "react";
import { useContext } from "react";
import { MahasiswaContext } from "./MahasiswaProvider";

const MahasiswaForm = () => {
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

    useEffect(() => {
        const fetchData = async () => {
            let dataMahasiswa = await axios.get(`https://backendexample.sanbercloud.com/api/student-scores`);
            let {data} = dataMahasiswa;
            setDaftarMahasiswa([...data]);
        }

        if(fetchStatus){
            console.log('fetch data') // sekali fetch data dengan if
            fetchData();
            setFetchStatus(false);
        }

        // fetchData(); // bisa gini aja tanpa if diatas, cuma nanti pas ngesetfetchstatusnya di tempat lain bisa berubah atau enggaknya, true still true
        // console.log('fetch data'); // 2x fetch data
        // fetchData();
        // setFetchStatus(false);
    }, [fetchStatus]);

    const handleChange = (event) => {
        setMahasiswa({...mahasiswa, [event.target.name]: event.target.value})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(curerntId === null){
            await axios.post(` https://backendexample.sanbercloud.com/api/student-scores`, mahasiswa);
        }else{
            await axios.put(` https://backendexample.sanbercloud.com/api/student-scores/${curerntId}`, mahasiswa);
            setCurrentId(null);
        }
        setFetchStatus(true);
        setMahasiswa({name: "", course:"", score:0})
    }
    
    return(
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
    )
}

export default MahasiswaForm;