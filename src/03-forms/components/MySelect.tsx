import { useField, ErrorMessage } from "formik"

interface propsInut {
    name: string
    label: string
    placeholder?: string
    [x: string]: any
    as: string
}

export function MySelect({ label, ...props }: propsInut) {
    const [field] = useField(props);
    console.log(field);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <select {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="custom-span-error-class" />

        </>
    )
}

