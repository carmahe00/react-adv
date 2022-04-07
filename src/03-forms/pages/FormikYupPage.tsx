import { useFormik } from "formik";
import * as Yup from 'yup';
import "../styles/styles.css"

export function FormikYupPage() {
    
    const { handleSubmit, errors, touched, getFieldProps } = useFormik({
        initialValues: { firstName: '', lastName: '', email: '' },
        onSubmit: values => console.log(values),
        validationSchema: Yup.object({
            firstName: Yup.string().required("required").max(15, "Must be 15 character or less"), 
            lastName: Yup.string().required("required").max(10, "Must be 10 characters or less"), 
            email: Yup.string().required("required").email("Invalid email address")
        })
    })
    return (
        <div>
            <h1>Formik Yup Tutorial</h1>
            <form noValidate onSubmit={handleSubmit} >
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps("firstName")}/>
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps("lastName")} />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input type="text" {...getFieldProps("email")} />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
