export const Button = (props) => {
    return(
    <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={props.handleFunction} value={props.value}>
        {props.name}
        {props.children}
    </button>
    )
}
export const ButtonNotFull = (props) => {
    return(
    <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={props.handleFunction} value={props.value}>
        {props.name}
        {props.children}
    </button>
    )
}

export const ButtonNotFullDanger = (props) => {
    return(
    <button type="submit" className="py-2 px-4  bg-rose-600 hover:bg-rose-700 focus:ring-rose-500 focus:ring-offset-rose-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg " onClick={props.handleFunction} value={props.value}>
        {props.name}
        {props.children}
    </button>
    )
}
