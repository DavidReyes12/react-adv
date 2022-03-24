import { Form, Formik } from "formik";
import * as Yup from "yup";

import { MyCheckbox, MySelect, MyTextInput } from "../components";

import "../styles/styles.css";

export const FormikAbstractation = () => {

    return (
        <div>
            <h1>Formik Abstractation</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: ""
                }}
                onSubmit={ (values) => {
                    console.log(values);
                }}
                validationSchema={ Yup.object({
                    firstName: Yup.string()
                                    .max(15, "Must be 15 characters or less")
                                    .required("Required"),
                    lastName: Yup.string()
                                    .max(15, "Must be 15 characters or less")
                                    .required("Required"),
                    email: Yup.string()
                                .email("Email is not valid")
                                .required("Required"),
                    terms: Yup.boolean()
                                .oneOf([true], "You must accept the terms and conditions"),
                    jobType: Yup.string()
                                .notOneOf([ "it-jr" ], "This option is not valid")
                                .required("Required")
                })}
            >
                {
                    (formik) => (
                        <Form>

                            <MyTextInput 
                                label="First Name" 
                                name="firstName"
                            />

                            <MyTextInput 
                                label="Last Name" 
                                name="lastName"
                            />

                            <MyTextInput 
                                label="Email Address" 
                                name="email"
                                type="email"
                            />

                            <MySelect name="jobType" label="Job Type">
                                <option value="">Pick something</option>
                                <option value="developer">Developer</option>
                                <option value="designer">Designer</option>
                                <option value="it-senior">IT Senior</option>
                                <option value="it-jr">IT Jr.</option>
                            </MySelect>

                            <MyCheckbox label="Terms and Conditions" name="terms" />

                            <button type="submit">Submit</button>

                        </Form>
                    )
                }
            </Formik>
        </div>
    )
};
