const FilterForm = () => {
    return (
        <div className="bg-white rounded-lg shadow sm:max-w-md sm:w-full sm:mx-auto sm:overflow-hidden">
            <div className="px-4 py-8 sm:px-10">
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300">
                        </div>
                    </div>
                    <div className="relative flex justify-center text-sm leading-5">
                        <span className="px-2 text-gray-500 bg-white">
                        Filters criteria
                        </span>
                    </div>
                </div>
                <div className="mt-6">
                <div className="w-full space-y-6">
                    <div className="w-full">
                        <div className=" relative ">
                            <input type="text" id="search-form-price" className=" rounded-lg border-inherit flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your price" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                            <input type="text" id="search-form-location" className=" rounded-lg border-inherit flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your location" />
                        </div>
                    </div>
                    <div className="w-full">
                        <div className=" relative ">
                            <input type="text" id="search-form-name" className=" rounded-lg border-inherit flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Your name" />
                        </div>
                    </div>
                    <div>
                        <span className="block w-full rounded-md shadow-sm">
                            <button type="button" className="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Find
                            </button>
                        </span>
                    </div>
                </div>
                </div>
            </div>
            <div className="px-4 py-6 border-t-2 border-gray-200 bg-gray-50 sm:px-10">
                <p className="text-xs leading-5 text-gray-500">
                This data are display for information and can change
                </p>
            </div>
        </div>
    )
}

export default FilterForm;