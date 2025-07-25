import Field from "./Field";
import "../styles/Fields.css"

const validSet = new Set(["text", "number", "email", "tel"]);

//@title
//@inputs: Array of objects that each contain a label and an input type
const Fields = ({title="Fields", inputs}) => {
    return(
        <div className="fields">
            <h1>{title}</h1>
            <ul>
                {inputs.map((obj) => {
                    if (!validSet.has(obj.type)) {
                        return;
                    }
                    return (
                        <li key={obj.id}>
                            <Field id={obj.id} label={obj.label} type={obj.type}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Fields;