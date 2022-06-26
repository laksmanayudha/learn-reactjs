import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const ProfileContext = createContext();
export const ProfileProvider = (props) => {
    const [userProfile, setUserProfile] = useState({
        name:"",
        email:"",
        image_url:""
    })

    useEffect(() => {
        if(Cookies.get('user') !== undefined){
            let {name, email, image_url} = JSON.parse(Cookies.get('user'));
            setUserProfile({...userProfile, name, email, image_url})
        }
    }, [])

    return(
        <ProfileContext.Provider value={ {userProfile, setUserProfile} }>
            {props.children}
        </ProfileContext.Provider>
    )
}