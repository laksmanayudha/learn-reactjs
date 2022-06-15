import "./tugas13.css";
import { MahasiswaProvider } from "./MahasiswaProvider";
import MahasiswaTable from "./MahasiswaTable";
import MahasiswaForm from "./MahasiswaForm";

const Mahasiswa = () => {
    return(
        <MahasiswaProvider>
            <MahasiswaTable />
            <MahasiswaForm />
        </MahasiswaProvider>
    )
}

export default Mahasiswa;