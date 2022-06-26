export const InputForm = (props) => {
    return (
    <div className="flex flex-col mb-2">
        <div className="flex relative ">
            <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                {props.icon}
            </span>
            <input type={props.type} id={props.id} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder={props.placeholder} autoComplete="username" name={props.name} onChange={props.handleFunction} value={props.value} required/>
        </div>
    </div>
    )
}

export const InputFormData = (props) =>{
    return(
        <input type={props.type} id={props.id} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder} autoComplete="" name={props.name} onChange={props.handleFunction} value={props.value} />
    )
}

export const InputFormDataRequired = (props) =>{
    return(
        <input type={props.type} id={props.id} className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={props.placeholder} autoComplete="" name={props.name} required onChange={props.handleFunction} value={props.value} />
    )
}

export const InputFormData2 = (props) => {
    return (
    <div className="w-full">
        <div className=" relative ">
            <input type={props.type} id={props.id}  className=" rounded-lg border-inherit flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder={props.placeholder} autoComplete="" name={props.name} onChange={props.handleFunction} value={props.value}  />
        </div>
    </div>
    )
}

export const InputFormWithLabel = (props) => {
    return(
        <div className=" relative ">
            <label htmlFor="name-with-label" className="text-gray-700">
                {props.label}
            </label>
            <input type={props.type} id={props.id} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent mt-2 mb-4" placeholder={props.placeholder} autoComplete="" name={props.name} onChange={props.handleFunction} value={props.value} required/>
        </div>
    )
}

export const SelectForm = (props) => {
    return(   
        <div className="w-full mb-4">
            <label className="text-gray-700 mr-4" htmlFor="">
                {props.label}
            </label>
            <select id="" className="w-full md:w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 mt-2" name={props.name} onChange={props.handleFunction} value={props.value} >
                {props.values !== undefined && props.values.map(value => {
                    return(
                        <option value={value} key={value} selected={value == props.selected ? true : false}>
                            {value}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export const TextAreaForm = (props) => {
    return(
        <label className="text-gray-700" htmlFor=""> {props.label}
        <textarea className="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="" placeholder={props.placeholder} name={props.name} rows={5} cols={40} defaultValue={""} onChange={props.handleFunction} value={props.value} required/>
        </label>
    )
}

export const RadioForm = (props) => {
    
    return(
        <div className="">
            <label htmlFor="">{props.label}</label>
            {props.values !== undefined && 
                props.values.map(item => {
                    return(
                        <div className="flex items-center my-4" key={item.value}>
                            <input checked={item.value == props.checked ? 1 : 0} type="radio" name={props.name} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onChange={props.handleFunction} value={item.value}/>
                            <label htmlFor="default-radio-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{item.title}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}