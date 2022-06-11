function CheckItemComponent(props){
    return(
        <div className="check-item">
          <input className='check-item-input' id={props.checkId} type="checkbox" />
          <label htmlFor={props.checkId}>{props.name}</label>
        </div>
    );
}

export default CheckItemComponent;