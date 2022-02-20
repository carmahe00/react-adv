import { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
    className?: string
    style?: React.CSSProperties | undefined
}

export const ProductButtons = ({ className, style }: Props) => {
    // TODO: maxcount
    const { counter, increaseBy, maxCount } = useContext(ProductContext)

    // TODO: isMaxReached = useCallback, [ counter, maxCount ]
    const isMaxReached =  useCallback(
        () => 
            counter === maxCount ? true : false

        ,
        [counter, maxCount],
    )
    console.log(counter);
    return (
        <div style={style} className={`${styles.buttonsContainer} ${className}`}>
            <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}  >-</button>
            <div className={styles.countLabel}>{counter}</div>
            <button className={`${styles.buttonAdd}  ${isMaxReached() ? styles.disabled : null}`} onClick={() => increaseBy(1)} > +</button>
        </div>
    )
}