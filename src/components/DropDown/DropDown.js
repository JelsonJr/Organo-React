import './DropDown.css';

export const DropDown = (props) => {
    return(
        <div className="dropDown">
            <label>{props.label}</label>
            <select onChange={event => props.ttModified(event.target.value)} required={props.required} value={props.valueProp}>
                <option value=""></option>
                {props.items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}