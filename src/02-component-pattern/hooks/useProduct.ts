import { useEffect, useState } from 'react';
import { Product, onChangeArgs } from '../interfaces/interfaces';

interface useProductArgs {
    product: Product
    onChange?: (args: onChangeArgs) => void
    value?: number
}

const useProduct = ({ product, onChange, value = 0 }: useProductArgs) => {
    const [counter, setCounter] = useState(value); // Cantidad agergados
    
    const increaseBy = (value: number) => {
        
        const newValue = Math.max(counter + value, 0)
        setCounter(newValue);
        onChange && onChange({ product, count: newValue }); // Emit
    }

    /**
     * cada vez que pasen un nuevo value
     */
    useEffect(() => {
        setCounter(value)
    }, [value])

    return {
        increaseBy, counter
    }
}

export default useProduct