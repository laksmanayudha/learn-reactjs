import { useContext } from "react";
import {Link, useHistory} from "react-router-dom"
import logo from "../assets/img/logo.png"
import { AppContext, AppProvider } from "./AppProvider";

const Navbar = () => {
    let {state} = useContext(AppContext)
    let {search, setSearch} = state
    let history = useHistory();
    const handleSearch = (event) => {
        setSearch(event.target.value)
        console.log(search)
    }
    return (
        <>
        <div className="topnav">
            <Link to ="/">
                <img src={logo} width="70" />
            </Link>
            <Link to ="/">Home</Link>
            <Link to ="/mobile-list">Movie List</Link>
            <Link to ="/about">About</Link>
            <form>
                <input type="text" name="search" onChange={handleSearch} className="border border-gray-600 mr-2 p-1" />
                <input type="submit" onClick={() => {history.push(`/search/${search}`)}} value="Cari" />
            </form>
        </div>
        </>
    )
}

export default Navbar;