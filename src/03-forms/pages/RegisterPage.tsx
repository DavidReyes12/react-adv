import { useForm } from "../hooks/useForm";

import "../styles/styles.css"

interface InitialValues {
    name: string;
    email: string;
    password1: string;
    password2: string;
};

export const RegisterPage = () => {

    const { 
        name, 
        email, 
        password1, 
        password2, 
        isValidEmail,
        onChange,
        resetForm
    } = useForm<InitialValues>({
        name: "",
        email: "",
        password1: "",
        password2: "",
    });

    const onSubmit = ( evt: React.FormEvent<HTMLFormElement> ) => {
        evt.preventDefault();
    };

    return (
        <div>
            <h1>Register Page</h1>
            
            <form noValidate onSubmit={ onSubmit } >
                <input 
                    type="text"
                    placeholder="name"
                    name="name"
                    value={ name }
                    onChange={ onChange }
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                { name.trim().length <= 0 && <span>This field is required</span> }

                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={ email }
                    onChange={ onChange }
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                { !isValidEmail(email) && <span>Email is not valid</span> }

                <input 
                    type="password"
                    placeholder="Password"
                    name="password1"
                    value={ password1 }
                    onChange={ onChange }
                />
                { password1.trim().length <= 0 && <span>This field is required</span> }
                { password1.trim().length < 6 && password1.trim().length > 0 && <span>Password must be 6 or more characters</span> }

                <input 
                    type="password"
                    placeholder="Repeat Password"
                    name="password2"
                    value={ password2 }
                    onChange={ onChange }
                />
                { password2.trim().length <= 0 && <span>This field is required</span> }
                { password2.trim().length > 0 && password1 !== password2 && <span>Password must be the same</span> }

                <button type="submit" >Create</button>

                <button type="button" onClick={ resetForm } >Reset form</button>
            </form>
        </div>
    )
};
