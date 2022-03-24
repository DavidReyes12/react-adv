import { useState } from "react";


// <T> es para que funcione como un generico "useState", es de cualquier tipo que le llegue como parametro
export const useForm = <T>( initState: T ) => {

    const [formData, setFormData] = useState(initState);

    const onChange = ( evt: React.ChangeEvent<HTMLInputElement> ) => {
        
        const { target: { value, name } } = evt;

        setFormData( prev => ({
            ...prev,
            [name]: value,
        }));

    };

    const resetForm = () => {
        setFormData({ ...initState });
    };

    const isValidEmail = ( email: string ) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    

    return {
        ...formData,
        isValidEmail,
        onChange,
        resetForm,
    };
};
