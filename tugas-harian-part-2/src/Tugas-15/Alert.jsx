export const Alert = (props) => {
    let cls = `bg-${props.alertColor}-200 border-${props.alertColor}-600 text-${props.alertColor}-600 border-l-4 p-4 fixed bottom-0 right-0`
    return (
        <div className={cls} role="alert">
            <p className="font-bold">
                Success
            </p>
            <p>
                {props.alertMessage}
            </p>
        </div>
    )
}

export default Alert;