import { ErrorMessage, useField } from "formik"

interface Props {
    label: string;
    name: string;
    placeholder?: string;
    [x: string]: any; // Cualquier tipo con x nombre "Comodin"
}

export const MySelect = ( { label, ...props }: Props ) => {

    const [field] = useField(props);
    // field = onChange, onBlur, value, etc.

    return (
        <>
            <label htmlFor={ props.id || props.name } >
                { label }
            </label>
            <select { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" className="custom-span-error" />
        </>
    )
}
