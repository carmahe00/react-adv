import React, { createContext, ReactElement } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, Product } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)

export interface Props {
    product: Product,
    children?: ReactElement[] | ReactElement,
    className?: string,
    style?: React.CSSProperties | undefined
}

export const ProductCard = ({ product, children, className, style }: Props) => {
    const { counter, increaseBy } = useProduct()

    return (
        <ProductContext.Provider value={{ counter, increaseBy, product }} >
            <div style={style} className={`${styles.productCard} ${className} `} >
                {children}
                {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffe mug"/> */}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div >
        </ProductContext.Provider>
    )
}


