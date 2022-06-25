import { Link } from "react-router-dom";
import { InputForm } from "./InputForm";
import { EmailIcon, LockIcon } from "./SVGIcons";
import { Button } from "./Button";
import { SuccesAlert, DangerAlert } from "./Alert";
import { useContext, useEffect } from "react";
import { AuthContext } from "./AuthProvider";

const LoginForm = () => {

    let { state, handleFunction } = useContext(AuthContext);
    let {
        user, setUser,
        alert, setAlert, 
        isCreateSuccess, setIsCreateSuccess, 
        login, setLogin
    } = state;

    let { handleLogin,handleAuthChange } = handleFunction;

    useEffect(() => {
        // console.log(user)
        return () => {
            setAlert(false);
            setIsCreateSuccess(false)
            setLogin(true)
            setUser({
                name:"",
                email: "",
                password:"",
                image_url:""
            })
        }
    }, [])

    return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 md:w-1/2">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Login To Your Account
        </div>
        <div className="mt-8">
            {(alert && isCreateSuccess && login) && <div className="mb-4"><SuccesAlert message="create account succes" /></ div>}
            {(alert && (!isCreateSuccess) && login) && <div className="mb-4"><DangerAlert message="failed to create account" /></ div>}
            {(alert && (!login)) && <div className="mb-4"><DangerAlert message="wrong username or password" /></ div>}

            <form onSubmit={handleLogin} autoComplete="off">
                <InputForm type="email" name="email" icon={<EmailIcon />} placeholder="Your Email" handleFunction={handleAuthChange}/>
                <InputForm type="password" name="password" icon={<LockIcon />} placeholder="Your Password" handleFunction={handleAuthChange}/>
                <div className="flex w-full">
                    <Button  name="Login"/>
                </div>
            </form>
        </div>
        <div className="flex items-center justify-center mt-6">
            <Link to="/signup" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                <span className="ml-2">
                    You don&#x27;t have an account?
                </span>
            </Link>
        </div>
    </div>
    )
}

export default LoginForm