import "../styles/Field.css"

const Field = ({id, label, type}) => {
    return(
        <>
            <div className="field">
                <label htmlFor={id}>{label}</label><br />
                <input className="fieldInput" id={id} type={type}></input>
            </div>
        </>
    );
};

export default Field;