import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    [x: string]: any; // Cualquier tipo con x nombre "Comodin"
}

export const MyCheckbox = ( { label, ...props }: Props ) => {

    const [field] = useField({ ...props, type: "checkbox" });
    // field = onChange, onBlur, value, etc.

    return (
        <>
            <label>
                <input type="checkbox" { ...field } { ...props } />
                { label }
            </label>
            <ErrorMessage name={ props.name } component="span" className="custom-span-error" />
        </>
    )
}
