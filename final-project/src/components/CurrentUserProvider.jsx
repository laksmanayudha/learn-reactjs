import { createContext, useState } from "react";

export const CurrentUserContext = createContext();
export const CurrentUserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState({
        name:"",
        email:""
    })
    return(
        <CurrentUserContext.Provider value={ {currentUser, setCurrentUser} }>
            {props.children}
        </CurrentUserContext.Provider>
    )
}