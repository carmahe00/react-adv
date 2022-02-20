import { useEffect, useRef, useState } from 'react';
import { Product, onChangeArgs, InitialValues } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number,
    initialValues?: InitialValues
}

const useProduct = ({ product, onChange, value = 0, initialValues }: useProductArgs) => {
    const [counter, setCounter] = useState<number>(initialValues?.count || value ); // Cantidad agergados
    const isMounted = useRef(false)
    const increaseBy = (value: number) => {
        
        let newValue = Math.max(counter + value, 0)
        newValue = initialValues?.maxCount ?  Math.min(newValue, initialValues?.maxCount ) : newValue
        
        setCounter(newValue);
        onChange && onChange({ product, count: newValue }); // Emit
    }

    const reset = () =>{
        setCounter(initialValues?.count || value)
    }

    /**
     * cada vez que pasen un nuevo value
     */
    useEffect(() => {
        if(!isMounted.current) return
        setCounter(value)
    }, [value])

    useEffect(() => {
        isMounted.current = true
    }, [])

    return {
        increaseBy, 
        counter, 
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,
        reset
    }
}

export default useProduct