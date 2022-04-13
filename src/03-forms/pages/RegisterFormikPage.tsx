import '../styles/styles.css';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { MyTextInput } from '../components/MyTextInput';

export const RegisterFormikPage = () => {

    return (
        <div>
            <h1>Regiser Page</h1>
            <Formik
                initialValues={{ name: '', email: '', password1: '', password2: '' }}
                onSubmit={values => {
                    console.log(values);
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                            .min(2, "El nombre debe de ser de 3 caracteres")
                            .max(15, "El nombre debe de ser menor de 15 caracteres")
                            .required("Requerido"),
                        email: Yup.string().email("El email es requerido").required(),
                        password1: Yup.string().min(6, "Contraseña debe de ser de 3 caracteres").required(),
                        password2: Yup.string().oneOf([Yup.ref("password1")]).required("Requerido")
                    })
                }
            >
                {({ handleReset }) => (
                    <Form>
                        <MyTextInput label="Nombre" name="name" placeholder="Nombre" />
                        <MyTextInput label="Email" type="email" name="email" placeholder="Email" />
                        <MyTextInput label="Password" type="password" name="password1" placeholder="******" />
                        <MyTextInput label="Password" type="password" name="password2" placeholder="******" />
                        <button type="submit" >Create</button>
                        <button type="button" onClick={handleReset} >Reset Form</button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}