import { useContext, useEffect } from "react";
import { MahasiswaContext } from "./MahasiswaProvider";
import {Link} from "react-router-dom";
import Alert from "./Alert";

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
        setFetchStatus,
        alertStatus,
        setAlertStatus
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
        <div className="max-w-3xl mx-auto mt-6">
            <div className="text-center mb-6">
                <Link className="inline-block py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50 w-full" to="/tugas15/create">Add new data</Link>
            </div>
            <table className="table p-4 bg-white shadow rounded-lg">
                <thead>
                    <tr>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            No
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Nama
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Mata Kuliah
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Nilai
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Indeks Nilai
                        </th>
                        <th className="border-b-2 p-4 dark:border-dark-5 whitespace-nowrap font-normal text-gray-900">
                            Aksi
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {daftarMahasiswa !== null && (daftarMahasiswa.map((item, index) => {
                            return (
                                <tr className="text-gray-700" key={item.id}>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {index + 1}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.name}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.course}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {item.score}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                        {indexOf(item.score)}
                                    </td>
                                    <td className="border-b-2 p-4 dark:border-dark-5">
                                            <button value={item.id} onClick={handleEdit} type="button" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50 mr-2">Edit</button>
                                            <button value={item.id} onClick={handleDelete} className="py-2 px-4  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50 mr-2">Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    )}
                </tbody>
                {/* {[<h1>hello</h1>, <h1>hello</h1>]} */}
            </table>
            {alertStatus.alertPopUp && <Alert alertMessage={alertStatus.alertMessage} alertColor={alertStatus.alertColor} />}
            
        </div>
    )
}

export default MahasiswaTable;