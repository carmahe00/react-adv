import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
    title?: string
    className?: string
    style?: React.CSSProperties | undefined
}

export const ProductTitle = ({ title, className, style }: Props) => {
    const { product } = useContext(ProductContext)
    let showTitle
    title ?
        showTitle = title :
        product.title ?
            showTitle = product.title :
            showTitle = 'No Description'
    return (
        <span style={style} className={`${styles.productDescription} ${className}`} >{showTitle}</span>
    )
}