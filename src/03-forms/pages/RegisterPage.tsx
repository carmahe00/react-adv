import '../styles/styles.css';
import { useForm } from '../hooks/useForm';
interface initialData {
    name: string;
    email: string;
    password1: string;
    password2: string;
}
const RegisterPage = () => {
    const { handleChange, formData, name, email, password1, password2, resetForm, isValidEmail } =
        useForm<initialData>({ name: '', email: '', password1: '', password2: '' });

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData);
    }

    return (
        <div>
            <h1>Regiser Page</h1>
            <form noValidate onSubmit={onSubmit} >
                <input
                    type="text"
                    value={name}
                    name="name"
                    onChange={handleChange}
                    placeholder="Name"
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {name.trim().length <= 0 && <span >Este campo es obligatorio</span>}
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    placeholder="Email"
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                {!isValidEmail(email) && <span >Email es valido</span>}
                <input
                    type="password"
                    name="password1"
                    value={password1}
                    onChange={handleChange}
                    placeholder="Password"
                />
                {password1.trim().length <= 0 && <span >Este campo es obligatorio</span>}
                {(password1.trim().length < 6 && password1.trim().length > 0) && <span>La contraseña debe tener mínimo 6 letras</span>}
                <input
                    type="password"
                    name="password2"
                    value={password2}
                    onChange={handleChange}
                    placeholder="Repeat Password"
                />
                {password2.trim().length <= 0 && <span >Este campo es obligatorio</span>}
                {password2.trim().length > 0 && password1 !== password2 && <span>Las contraseñas deben ser iguales</span>}
                <div className="button-group">
                    <button type="submit" >Create</button>
                    <button type="button" onClick={resetForm} >Reset</button>
                </div>
            </form>
        </div>
    )
}

export default RegisterPage
