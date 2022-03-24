import { useField, ErrorMessage } from "formik"

interface Props {
    label: string;
    name: string;
    type?: "text" | "email" | "password";
    placeholder?: string;
    [x: string]: any; // Cualquier tipo con x nombre "Comodin"
}

export const MyTextInput = ( { label, ...props }: Props ) => {

    const [field, /*meta*/] = useField(props);
    // field = onChange, onBlur, value, etc.

    return (
        <>
            <label htmlFor={ props.id || props.name } >
                { label }
            </label>
            <input className="text-input" { ...field } { ...props } />
            <ErrorMessage name={ props.name } component="span" className="custom-span-error" />
            {/*
                meta.touched && meta.error && (
                    <span className="error">
                        { meta.error }
                    </span>
                )
            */}
        </>
    )
}
