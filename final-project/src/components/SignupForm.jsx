import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { Button } from "./Button";
import { InputForm } from "./InputForm";
import { EmailIcon, ImageIcone, LockIcon, ProfileIcon } from "./SVGIcons";

const SignupForm = () => {

    let {state, handleFunction} = useContext(AuthContext);
    let { user, setUser } = state;
    let{
        handleSignUp,
        handleAuthChange
    } = handleFunction;

    useEffect(() => {
        // console.log(user)
        return () => {
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
            Sign Up To Create Account
        </div>
        <div className="mt-8">
            <form  autoComplete="off" onSubmit={handleSignUp}>
                <InputForm type="email" name="email" icon={<EmailIcon />} placeholder="Your Email" handleFunction={handleAuthChange} value={user.email}/>
                <InputForm type="text" name="name" icon={<ProfileIcon />} placeholder="Your Username" handleFunction={handleAuthChange} value={user.name}/>
                <InputForm type="text" name="image_url" icon={<ImageIcone />} placeholder="Your Image URL" handleFunction={handleAuthChange} value={user.image_url}/>
                <InputForm type="password" name="password" icon={<LockIcon />} placeholder="Your Password" handleFunction={handleAuthChange} value={user.password}/>
                <div className="flex w-full">
                    <Button  name="Sign up"/>
                </div>
            </form>
        </div>
        <div className="flex items-center justify-center mt-6">
            <Link to="/login" className="inline-flex items-center text-xs font-thin text-center text-gray-500 hover:text-gray-700 dark:text-gray-100 dark:hover:text-white">
                <span className="ml-2">
                    Already have an account?
                </span>
            </Link>
        </div>
    </div>
    )
}

export default SignupForm;