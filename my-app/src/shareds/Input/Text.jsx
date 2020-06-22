import React from "react";
import "./InputTag.css";
const InputTag = React.memo((props) => {
    return (
        <div>
            <input autoFocus={props.autoFocus} className="input__tag" type="text" onChange={props.change}/>
        </div>
    )
}, (prev, next) => {
    if (prev.event !== next.event) {
        return false;
    }
    return true;
    
})

export default InputTag;