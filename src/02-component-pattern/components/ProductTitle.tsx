import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export const ProductTitle = ({ title }: { title?: string }) => {
    const { product } = useContext(ProductContext)
    let showTitle
    title ?
        showTitle = title :
        product.title ?
            showTitle = product.title :
            showTitle = 'No Description'
    return (
        <span className={styles.productDescription} >{showTitle}</span>
    )
}