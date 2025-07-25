import Fields from "./Fields";

const AppForm = () => {

    const state = {

    };

    return (
    <form>
        <Fields 
            title="General"
            inputs={[
                {
                    id: crypto.randomUUID(),
                    label: "name",
                    type: "text"
                },
                {
                    id: crypto.randomUUID(),
                    label: "email",
                    type: "email"
                },
                {
                    id: crypto.randomUUID(),
                    label: "phone",
                    type: "tel"
                }
            ]}
        />
    </form>
    );
};

export default AppForm;