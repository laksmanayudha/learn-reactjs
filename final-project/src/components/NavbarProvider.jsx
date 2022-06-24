import { createContext, useState } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = (props) => {
    const [active, setActive] = useState("1")
    const handleActive = (event) => {
        let currentKey = event.target.id
        setActive(currentKey);
    }
    return(
        <NavbarContext.Provider value={ {active, setActive, handleActive} }>
            {props.children}
        </NavbarContext.Provider>
    )
}
