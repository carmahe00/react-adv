import { useField, ErrorMessage } from "formik"

interface propsInut {
    name: string
    label: string
    placeholder?: string
    [x: string]: any
}

export function MyCheckBox({ label, ...props }: propsInut) {
    const [field] = useField({ ...props, type: "checkbox" });
    return (
        <>
            <label htmlFor={props.id || props.name}>
                <input type="checkbox" {...field} {...props} />
                {label}
            </label>
            <ErrorMessage name={props.name} component="span" className="custom-span-error-class" />
        </>
    )
}

