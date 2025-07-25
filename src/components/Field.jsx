import { useState } from "react";
import "../styles/Field.css"

const Field = ({id, label, type}) => {
    const [value, setValue] = useState("");

    const change = (ev) => {
        setValue(ev.target.value);
    }

    return(
        <>
            <div className="field">
                <label htmlFor={id}>{label}</label><br />
                <input className="fieldInput" id={id} type={type} value={value} onChange={change}></input>
            </div>
        </>
    );
};

export default Field;