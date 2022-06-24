import { useHistory } from "react-router-dom";

const Hero = () => {
    const history = useHistory();
    return(
        <div className="bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
            <div className="w-full py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                <span className="block">
                    Get your dream job here for better future
                </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                Get your dream job here for better future Get your dream job here for better future Get your dream job here for better future Get your dream job here for better future Get your dream job here for better future
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                <div className="mt-12 inline-flex rounded-md shadow">
                    <button onClick={() => history.push('/job-vacancy')} type="button" className="py-2 px-4  bg-blue-500 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Get started
                    </button>
                </div>
                </div>
            </div>
            <div className="flex items-center gap-8 p-8 lg:p-24">
                <img src={'https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} className="rounded-lg w-1/2" alt="Tree" />
                <div>
                <img src={'https://media.istockphoto.com/photos/businessman-plan-business-growth-and-financial-increase-of-positive-picture-id1361507082?b=1&k=20&m=1361507082&s=170667a&w=0&h=s2reDA9gednXcuvBW4piXkWHz2_ScYB3uObZQsYfhqI='} className="rounded-lg mb-8" alt="Tree" />
                <img src={'https://media.istockphoto.com/photos/man-working-at-home-picture-id1354077790?b=1&k=20&m=1354077790&s=170667a&w=0&h=Du48Su-tddPpoRW8oyENY-HDH0di8VNoLdSSTnOiIGI='} className="rounded-lg" alt="Tree" />
                </div>
            </div>
        </div>
    )
}

export default Hero;