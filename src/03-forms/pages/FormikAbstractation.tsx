import { Formik, Form, FormikProps } from "formik";
import * as Yup from 'yup';
import { MyCheckBox, MyTextInput, MySelect } from '../components';

import "../styles/styles.css"

interface Values {
    firstName: string,
    lastName: string,
    email: string,
    terms: boolean,
    jobType: string,
}

export function FormikAbstractation() {
    return (
        <div>
            <h1>Formik Abstractation</h1>
            <Formik initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                terms: false,
                jobType: ''
            }}
                onSubmit={(values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        firstName: Yup.string().required("required").max(15, "Must be 15 character or less"),
                        lastName: Yup.string().required("required").max(10, "Must be 10 characters or less"),
                        email: Yup.string().required("required").email("Invalid email address"),
                        terms: Yup.boolean().oneOf([true], 'Conditions is required'),
                        jobType: Yup.mixed().oneOf(["developer", "designer", "it-senior"], "Option denied")
                    })}
            >
                {(props: FormikProps<Values>) => (
                    <Form>
                        <MyTextInput name="firstName" type="text" label="First Name" placeholder="First Name" />
                        <MyTextInput name="lastName" type="text" label="Last Name" placeholder="Last Name" />
                        <MyTextInput name="email" type="email" label="Email" placeholder="Email" />

                        <MySelect name="jobType" as="select" label="Job Type" >
                            <option value="">Pick Something</option>
                            <option value="developer">developer</option>
                            <option value="designer">designer</option>
                            <option value="it-senior">it-senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </MySelect>

                        <MyCheckBox name="terms" label="Terms & conditions" />

                        <button type="submit" >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

