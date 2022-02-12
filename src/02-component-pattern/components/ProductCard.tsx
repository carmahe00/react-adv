import { createContext } from 'react';

import useProduct from '../hooks/useProduct';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

import styles from '../styles/styles.module.css';


export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)


export const ProductCard = ({ product, children }: ProductCardProps) => {
    const { counter, increaseBy } = useProduct()

    return (
        <ProductContext.Provider value={{ counter, increaseBy, product }} >
            <div className={styles.productCard} >
                {children}
                {/* <img className={styles.productImg} src="./coffee-mug.png" alt="coffe mug"/> */}
                {/* <ProductImage img={product.img} />
            <ProductTitle title={product.title} />
            <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
            </div >
        </ProductContext.Provider>
    )
}


