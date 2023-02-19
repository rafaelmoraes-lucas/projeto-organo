import './TextField.css'

export const TextField = (props) => {

    const modifiedPlaceholder = `${props.placeholder}...` 

    const onTyping = (event) => {
        props.onChanging(event.target.value)
    }

    return (
        <div className="text-field">
            <label>
                {props.label}
            </label>
            <input value={props.value} onChange={onTyping} required={props.required} placeholder={modifiedPlaceholder}/>
        </div>
    )
}
