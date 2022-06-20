import { useContext, useEffect } from "react";
import { AppContext } from "./AppProvider";
import axios from "axios";
import { useParams } from "react-router-dom";

const Home = () => {

    const {valueOfSearch} = useParams()
    const {state, handleFunction} = useContext(AppContext);

    let {
        appList,
        setAppList,
        fetchStatus,
        setFetchStatus,
        search,
    } = state

    let {
        fetchData,
        isFree,
        convertSize,
        isAndoridIOS,
        fetchSearch
    }  = handleFunction

    useEffect(() => {
        if(fetchStatus){
            fetchData()
            setFetchStatus(false)
        }
        
        if(valueOfSearch){
            fetchSearch(valueOfSearch)
        }
    }, [fetchStatus])

    return(
    <>
        <div className="row">
            <div className="section">
                {appList !== null && appList.map(item => {
                        return(
                            <div className="card" key={item.id}>
                                <div>
                                    <h2 className="text-xl font-bold">{item.name}</h2>
                                    <h5>Release Year : {item.release_year}</h5>
                                    <img className="fakeimg" style={{ width: "50%", height: "300px", objectFit: "cover" }} src={item.image_url} />
                                    <br />
                                    <br />
                                    <div>
                                        <strong>Price: {isFree(item.price)}</strong><br />
                                        <strong>Rating: {item.rating}</strong><br />
                                        <strong>Size: {convertSize(item.size)}</strong><br />
                                        <strong style={{ marginRight: "10px" }}>Platform : {isAndoridIOS(item.is_android_app, item.is_ios_app)}
                                        </strong>
                                        <br />
                                    </div>
                                    <p>
                                        <strong style={{ marginRight: "10px" }}>Description :</strong>
                                        {item.description}
                                    </p>
                                    <hr />
                                </div>
                            </div>
                        )
                    })
                }


            </div>
        </div>
    </>
    )
}

export default Home;