
import { useState } from 'react';
import { cart, onChangeArgs } from '../interfaces/interfaces';
const useShoppingCart = () => {
    const [shoppingCart, setShoppingCart] = useState<cart>({})

    /**
     * 
     * @param param0 parámetro emitido
     */
    const onProductCountChange = ({ product, count }: onChangeArgs) => {

        setShoppingCart(oldShoppingCard => {
            /* const productInCart: ProductInCart = oldShoppingCard[product.id] || { ...product, count: 0 }
            if (Math.max(productInCart.count + count, 0) > 0) {
                productInCart.count += count
                return {
                    ...oldShoppingCard,
                    [product.id]: productInCart
                }
            }

            //Borrar el producto
            delete oldShoppingCard[product.id] // => {}
            return { ...oldShoppingCard } */
            if (!count) {
                delete oldShoppingCard[product.id] // => {}
                return { ...oldShoppingCard }
            }
            return {
                ...oldShoppingCard,
                [product.id]: {...product, count}
            }
        })

    }
    return {

        onProductCountChange,
        shoppingCart
    }
}
export default useShoppingCart