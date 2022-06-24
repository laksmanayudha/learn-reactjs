import CompanyCard from "./CompanyCard";

const SearchResult = () => {
    return(
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 place-content-center ml-6">
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
            <CompanyCard />
        </div>
    )
}

export default SearchResult;