const AuthContent = (props) => {
    return (
    <div className="flex flex-wrap w-9/12 mx-auto md:my-24">
        {props.left}
        <div className="w-1/2 shadow-2xl">
            <img className="hidden object-cover h-full md:block" src={'https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzJ8fHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'} />
        </div>
        {props.right}
    </div>
    )
}

export default AuthContent;