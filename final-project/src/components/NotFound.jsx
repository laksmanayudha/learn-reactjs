import { Button } from "./Button";
import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <main className="bg-white relative overflow-hidden h-screen relative">
            <header className="absolute top-0 left-0 right-0 z-20">
                <nav className="container mx-auto px-6 md:px-12 py-4">
                <div className="md:flex justify-between items-center">
                    <div className="flex justify-between items-center">
                    <div className="md:hidden">
                        <button className="text-gray-800 focus:outline-none">
                        <svg className="h-12 w-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                        </button>
                    </div>
                    </div>
                </div>
                </nav>
            </header>
            <div className="container mx-auto h-screen pt-32 md:pt-0 px-6 z-10 flex items-center justify-between">
                <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between items-center relative">
                <div className="w-full mb-16 md:mb-8 text-center lg:text-left">
                    <h1 className="font-light font-sans text-center lg:text-left text-5xl lg:text-8xl mt-12 md:mt-0 text-gray-700">
                    Sorry, this page isn't available
                    </h1>
                    <br />
                    <Link to="/" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg" >Go back home</Link>
                </div>
                <div className="block w-full mx-auto md:mt-0 relative max-w-md lg:max-w-2xl">
                    <img src={'https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHJlcGFpciUyMGNhcnRvb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} />
                </div>
                </div>
            </div>
        </main>
    )
}

export default NotFound;