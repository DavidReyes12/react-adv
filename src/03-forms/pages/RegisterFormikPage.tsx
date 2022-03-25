import * as Yup from "yup";
import { Form, Formik } from "formik";
import { MyTextInput } from "../components";

import "../styles/styles.css"


const initialValues = {
    name: "",
    email: "",
    password: "",
    password2: "",
};

const yupValidations = Yup.object({
    name: Yup.string()
                    .min(2, "Must be 2 characters or more")
                    .max(15, "Must be 15 characters or less")
                    .required("Required"),
    email: Yup.string()
                .email("Email is not valid")
                .required("Required"),
    password: Yup.string()
                .min(6, "Must be 6 characters or more")
                .required("Required"),
    password2: Yup.string()
                .oneOf([ Yup.ref("password"), "Password must be the same"])
                .required("Required")
});

export const RegisterFormikPage = () => {

    const onSubmit = ( values: object ) => {
        console.log(values);
    };

    return (
        <div>
            <h1>Register Formik Page</h1>

            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={yupValidations} 
            >
                {
                    ({ handleReset }) => (
                        <Form>

                            <MyTextInput
                                label="Name" 
                                name="name"
                            />

                            <MyTextInput 
                                label="Email" 
                                name="email"
                                type="email"
                            />

                            <MyTextInput 
                                label="Password" 
                                name="password"
                                type="password"
                            />

                            <MyTextInput 
                                label="Confirm Password" 
                                name="password2"
                                type="password"
                            />

                            <button type="submit" >Create</button>

                            <button type="button" onClick={ handleReset }>Reset form</button>

                        </Form>
                    )
                }
            </Formik>

        </div>
    )
};
