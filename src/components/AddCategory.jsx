import { useState } from "react";

export const AddCategory = ({añadirCategory}) => {

    const [value, setValue] = useState('')

    const onChange = ({target}) => {
        setValue(target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(value.length < 1) return;

        añadirCategory(value);

    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="text" 
                placeholder="Escribir Aqui"
                value={value}
                onChange={onChange}
            />
        </form>
    )

}
