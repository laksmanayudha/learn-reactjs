import {useState} from "react";
import "./tugas11.css";

const List = () => {
    const [daftarBuah, setDaftarBuah] = useState([
        {nama: "Nanas", hargaTotal: 100000, beratTotal: 4000 },
        {nama: "Manggis", hargaTotal: 350000, beratTotal: 10000},
        {nama: "Nangka", hargaTotal: 90000, beratTotal: 2000},
        {nama: "Durian", hargaTotal: 400000, beratTotal: 5000},
        {nama: "Strawberry", hargaTotal: 120000, beratTotal: 6000}
    ]);
    const [item, setItem] = useState({nama: "", hargaTotal:0, beratTotal:2000});
    const [currentIndex, setCurrentIndex] = useState(-1);
    const handleChange = (event) => {
        if(event.target.name == "nama"){
            setItem({...item, nama:event.target.value})
        }else if(event.target.name == "hargaTotal"){
            setItem({...item, hargaTotal:parseInt(event.target.value)})
        }else{
            setItem({...item, beratTotal:parseInt(event.target.value)})
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let newDaftarBuah = daftarBuah;

        if(currentIndex === -1){
            newDaftarBuah = [...daftarBuah, item];
        }else{
            newDaftarBuah[currentIndex] = item;
            setCurrentIndex(-1);
        }
        
        setDaftarBuah(newDaftarBuah);
        setItem({nama: "", hargaTotal:0, beratTotal:2000})
    }
    const handleDelete = (event) => {
        let index = parseInt(event.target.value);
        let newDaftarBuah = daftarBuah.filter((item, i) => {
            return i !== index;
        });
        setDaftarBuah(newDaftarBuah);
    }
    const handleEdit = (event) => {
        let index = parseInt(event.target.value);
        setItem(daftarBuah[index]);
        setCurrentIndex(index);
    }
    return(
        <>
            <div className="table">
                <h1>Daftar Harga Buah</h1>
                <table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Nama</th>
                            <th>Harga Total</th>
                            <th>Berat Total</th>
                            <th>Harga per kg</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            daftarBuah.map((item, index) => {
                                return (
                                    <tr>
                                        <td>{index + 1}</td>
                                        <td>{item.nama}</td>
                                        <td>{item.hargaTotal}</td>
                                        <td>{item.beratTotal/1000} kg</td>
                                        <td>{item.hargaTotal/(item.beratTotal/1000)}</td>
                                        <td className="action">
                                            <button value={index} onClick={handleEdit} className="btn edit">Edit</button>
                                            <button value={index} onClick={handleDelete} className="btn delete">Delete</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
            <div className="form-container">
                <h1>Form Daftar Harga Buah</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-item">
                        <label htmlFor="nama">Nama:</label>
                        <input type="text" name="nama" onChange={handleChange} value={item.nama} required/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="nama">Harga Total:</label>
                        <input type="number" name="hargaTotal" min="0" onChange={handleChange} value={item.hargaTotal} required/>
                    </div>
                    <div className="input-item">
                        <label htmlFor="nama" >Berat Total(dalam gram):</label>
                        <input type="number" name="beratTotal" min="2000" step="any" onChange={handleChange} value={item.beratTotal} required/>
                    </div>
                    <div className="input-item buttonSubmit">
                        <button className="btn submit">submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default List;