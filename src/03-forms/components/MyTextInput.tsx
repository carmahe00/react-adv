import React from 'react';
import { useField, Field, ErrorMessage } from "formik"

interface propsInut {
    name: string
    label: string
    type?: React.HTMLInputTypeAttribute,
    placeholder?: string
    [x: string]: any
}

export function MyTextInput({ label, ...props }: propsInut) {
    const [field] = useField(props);
    return (
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <Field {...field} {...props} />
            <ErrorMessage name={props.name} component="span" className="custom-span-error-class" />
        </>
    )
}
