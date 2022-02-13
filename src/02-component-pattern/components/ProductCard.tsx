import React, { createContext, ReactElement } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product, onChangeArgs } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

export interface Props {
    product: Product
    children?: ReactElement[] | ReactElement
    className?: string
    style?: React.CSSProperties | undefined
    onChange?: (args: onChangeArgs) => void
    value?: number

}

export const ProductCard = ({ product, children, className, style, onChange, value }: Props) => {
    
    const { counter, increaseBy } = useProduct({onChange, product, value})
    return (
        <ProductContext.Provider value={{ counter, increaseBy, product }} >
            <div style={style} className={`${styles.productCard} ${className} `} >
                {children}
            </div >
        </ProductContext.Provider>
    )
}


