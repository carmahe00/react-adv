import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from 'yup';
import "../styles/styles.css"

export function FormikComponents() {
    return (
        <div>
            <h1>Formik Components</h1>
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
                {({ errors, touched }) => (
                    <Form>
                        <label htmlFor="firstName">First Name</label>
                        <Field type="text" name="firstName" />
                        <ErrorMessage component="span" name="firstName" />

                        <label htmlFor="lastName">Last Name</label>
                        <Field type="text" name="lastName" />
                        <ErrorMessage component="span" name="lastName" />

                        <label htmlFor="email">Email Address</label>
                        <Field type="text" name="email" />
                        <ErrorMessage component="span" name="email" />

                        <label htmlFor="jobType">Job Type</label>
                        <Field name="jobType" as="select" >
                            <option value="">Pick Something</option>
                            <option value="developer">developer</option>
                            <option value="designer">designer</option>
                            <option value="it-senior">it-senior</option>
                            <option value="it-jr">IT Jr.</option>
                        </Field>
                        <ErrorMessage component="span" name="jobType" />

                        <label >
                            <Field type="checkbox" name="terms" />
                            Terms and conditions
                        </label>
                        <ErrorMessage component="span" name="terms" />

                        <button type="submit" >Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}
