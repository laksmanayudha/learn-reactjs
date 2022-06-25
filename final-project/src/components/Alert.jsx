export const SuccesAlert = (props) => {
    return(
        <div className="bg-green-200 border-green-600 text-green-600 border-l-4 p-2" role="alert">
            <p className="font-bold">
                {props.title}
            </p>
            <p>
                {props.message}
            </p>
        </div>
    )
}

export const DangerAlert = (props) => {
    return(
        <div className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4" role="alert">
            <p className="font-bold">
                {props.title}
            </p>
            <p>
                {props.message}
            </p>
        </div>
    )
}