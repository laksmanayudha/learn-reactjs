import { createContext, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";

export const AuthContext = createContext();
export const AuthProvider = (props) => {

    const history = useHistory();
    const [user, setUser] = useState({
        name:"",
        email: "",
        password:"",
        image_url:""
    })
    const [alert, setAlert] = useState(false)
    const [isCreateSuccess, setIsCreateSuccess] = useState(false)
    const [login, setLogin] = useState(true)
    const [changePassword, setChangePassword] = useState({
        current_password:"",
        new_password:"",
        new_confirm_password:""
    })
    const [changePasswordStatus, setChangePasswordStatus] = useState(false)

    const handleSignUp = (event) => {
        event.preventDefault();
        let {name, email, password, image_url} = user;
        axios.post(`https://dev-example.sanbercloud.com/api/register`, { name, email, password, image_url })
         .then((res) => {
            setAlert(true);
            setIsCreateSuccess(true);
            setUser({
                name:"",
                email: "",
                password:"",
                image_url:""
            })
            history.push("/login");
         })
         .catch((err) => {
            console.log(err.message);
            setAlert(true);
            setIsCreateSuccess(false);
            setUser({
                name:"",
                email: "",
                password:"",
                image_url:""
            });
            history.push("/login");
         })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        let {email, password} = user;
        axios.post(`https://dev-example.sanbercloud.com/api/login`, { email, password })
         .then((res) => {
            let token = res.data.token;
            let {name, email, image_url} = res.data.user
            Cookies.set('token', token)
            Cookies.set('user', JSON.stringify({name, email, image_url}))
            history.push("/dashboard")
         })
         .catch((err) => {
            console.log(err.message)
            setUser({
                name:"",
                email: "",
                password:"",
                image_url:""
            })
            setAlert(true);
            setLogin(false);
            history.push("/login");
         })
    }
    
    const handleAuthChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser({...user, [name]: value});
    }

    const handleSubmitChangePassword = (event) => {
        event.preventDefault();
        let {current_password, new_password, new_confirm_password} = changePassword;
        if(Cookies.get('token') !== undefined){
            axios.post(`https://dev-example.sanbercloud.com/api/change-password`, 
                {
                    current_password, 
                    new_password, 
                    new_confirm_password
                },
                {
                    'headers': {
                        "Authorization" : `Bearer ${Cookies.get('token')}`
                    }
                }
            ).then(res =>{
                setAlert(true);
                setChangePasswordStatus(true);
            }).catch(err => {
                console.log(err.message)
                setAlert(true);
                setChangePasswordStatus(false)
            })
        }
    }

    const handleChangePassword = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setChangePassword({...changePassword, [name]: value});
    }

    let state = {
        user, setUser,
        alert, setAlert,
        isCreateSuccess, setIsCreateSuccess,
        login, setLogin,
        changePassword, setChangePassword,
        changePasswordStatus, setChangePasswordStatus
    }

    let handleFunction = {
        handleSignUp, handleAuthChange, handleLogin,
        handleSubmitChangePassword, handleChangePassword
    }

    return(
        <AuthContext.Provider value={ {state, handleFunction} }>
            {props.children}
        </AuthContext.Provider>
    )
}