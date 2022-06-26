import Cookies from "js-cookie";
import { Redirect, Route } from "react-router-dom";

export const AuthorizedRoute = (props) => {
    if ( (Cookies.get('token') !== undefined) && (Cookies.get('user') !== undefined)){
        return <Route {...props} />
    }else{
        return <Redirect to="/" />
    }
}

export const AuthenticationRoute = (props) => {
    if ( (Cookies.get('token') === undefined) || (Cookies.get('user') === undefined)){
        return <Route {...props} />
    }else{
        return <Redirect to="/" />
    }
}