import { Link, useParams } from "react-router-dom"
import { useContext, useEffect } from "react";
import { AppContext } from "./AppProvider";
import axios from "axios";

const AppForm = () => {

    const {id} = useParams()
    const {state, handleFunction} = useContext(AppContext);

    let {
        appList,
        setAppList,
        fetchStatus,
        setFetchStatus,
        appItem,
        setAppItem,
        setCurrentId
    } = state

    let {
        fetchData,
        isFree,
        convertSize,
        isAndoridIOS,
        handleEdit,
        handleChange,
        handleDelete,
        handleSubmit,
        exerpt
    }  = handleFunction

    useEffect( () => { 
        if ( id !== undefined ){
            axios.get(`https://backendexample.sanbercloud.com/api/mobile-apps/${id}`).then((res) => {
                let {data} = res
                setAppItem(data);
                setCurrentId(data.id)
            })
        }

        // componentWillUnMount
        return () => {
            console.log("unmount")
            setAppItem({
                "name": "",
                "description": "",
                "category": "",
                "size": 0,
                "price": 0,
                "rating": 0,
                "image_url": "",
                "release_year": 2007,
                "is_android_app": true,
                "is_ios_app": true
            })
            setCurrentId(null)
        }
    }, [])

    return (
        <div className="form-container app">
            <div style={{ textAlign: "left", marginBottom: "10px" }}>
                <Link className="inline-block py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50" style={{ textDecoration: "none"}} to="/mobile-list">back to Daftar Aplikasi</Link>
            </div>
            <form onSubmit={handleSubmit}>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Name
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="text" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="name" onChange={handleChange} value={appItem.name} required />
                </div>
                <div className="input-item">
                    <label className="text-gray-700" htmlFor="name">Description</label>
                    <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="description" onChange={handleChange} value={appItem.description} rows={5} cols={40} defaultValue={"    "} />
                </div>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Category
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="text" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="category" onChange={handleChange} value={appItem.category} required />
                </div>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Release Year
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="number" min="2007" max="2021" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="release_year" onChange={handleChange} value={appItem.release_year} required />
                </div>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Size
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="number" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="size" onChange={handleChange} value={appItem.size} required />
                </div>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Price
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="number" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="price" onChange={handleChange} value={appItem.price} required />
                </div>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Rating
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="number" min="0" max="5" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="rating" onChange={handleChange} value={appItem.rating} required />
                </div>
                <div className=" relative ">
                    <label htmlFor="required-email" className="text-gray-700">
                        Image URL
                        <span className="text-red-500 required-dot">
                        *
                        </span>
                    </label>
                    <input type="text" id="required-email" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="image_url" onChange={handleChange} value={appItem.image_url} required />
                </div>
                <div className="input-item">
                    <input type="checkbox" name="platform" /> Android
                    <br />
                    <input type="checkbox" name="platform"/> IOS
                </div>
                
                <div className=" input-item buttonSubmit">
                    <button className="inline-block py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-full shadow-indigo-500/50 w-full mt-8">submit</button>
                </div>
            </form>
        </div>
    )
}

export default AppForm;