import SearchForm from "./SearchForm";
import FilterForm from "./FilterForm";
import SearchResult from "./SearchResult";

const SearchJob = () => {
    return(
        <>
        <div className="text-center mt-24 mb-6 text-xl">
            <h1 className="font-normal text-gray-700">What job do you want to find ?</h1>
        </div>
        <main className="flex flex-wrap md:flex-nowrap">
            <div className="search-filter-form mx-auto w-full md:w-2/6">
                <SearchForm />
                <FilterForm />
            </div>
            <div className="search-result mt-6 md:mt-0 w-full">
                <SearchResult />
            </div>
        </main>
        </>
    )
}

export default SearchJob