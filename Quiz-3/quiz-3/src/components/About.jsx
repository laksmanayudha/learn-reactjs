import { Link } from "react-router-dom";

const About = () => {
    return(
        <>
            <div className="full-height">
                <div className="about">
                    <center><h1>Data Peserta Sanbercode Bootcamp Reactjs</h1></center>
                    <ol>
                        <li><b>Nama:</b> Laksmana Yudha</li>
                        <li><b>Email:</b> laksmanayudha22@gmail.com</li>
                        <li><b>Sistem Operasi yang digunakan:</b> Windows</li>
                        <li><b>Akun Gitlab:</b> laksmanayudha</li>
                        <li><b>Akun Telegram:</b>Laksmana Yudha</li>
                    </ol>
                    <br />
                    <Link to="/" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Kembali Ke Home</Link>
                </div>
            </div>
        </>
    )
}

export default About;