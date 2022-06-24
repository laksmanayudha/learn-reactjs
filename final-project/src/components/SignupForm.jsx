import { Link } from "react-router-dom";
import { Button } from "./Button";
import { InputForm } from "./InputForm";
import { EmailIcon, LockIcon } from "./SVGIcons";

const SignupForm = () => {
    return (
    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10 md:w-1/2">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Sign Up To Create Account
        </div>
        <div className="mt-8">
            <form  autoComplete="off">
                <InputForm type="email" name="email" icon={<EmailIcon />} placeholder="Your Email" />
                <InputForm type="text" name="username" icon={<EmailIcon />} placeholder="Your Username" />
                <InputForm type="text" name="img_url" icon={<EmailIcon />} placeholder="Your Image URL" />
                <InputForm type="password" name="password" icon={<LockIcon />} placeholder="Your Password" />
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