import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'

import { products } from '../data/products';

import '../styles/custom-style.css';

const product = products[0]

const ShoppingPage = () => {


    return (
        <div  >
            <h1>ShoppingPage</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white "
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >
                {
                    ({ reset, increaseBy, isMaxCountReached, count }) => (
                        <>
                            <ProductImage
                                className='custom-image'
                                style={{
                                    boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
                                }}
                            />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />
                            <button onClick={reset} >Reset</button>
                            {count !== 0 && <button onClick={() => increaseBy(-2)} >-2</button>}
                            {!isMaxCountReached && <button onClick={() => increaseBy(2)} >+2</button>}
                            <span>{count}</span>
                        </>
                    )
                }
            </ProductCard>



            {/* <div>
                <code>
                    {JSON.stringify(shoppingCart, null, 5)}
                </code>
            </div> */}
        </div>
    )
}

export default ShoppingPage
