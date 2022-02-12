import React from 'react'
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from '../components'

const product = {
    id: "1",
    title: "Coffe Mug",
    img: "./coffee-mug.png"
}

const ShoppingPage = () => {
    return (
        <div>
            <h1>ShoppingPage</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '12px'
            }}>
                <ProductCard product={product} >
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>

                <ProductCard product={product} >
                    <ProductImage img="https://i.imgflip.com/1bij.jpg" />
                    <ProductTitle title="Hola Mundo" />
                    <ProductButtons />
                </ProductCard>
                
            </div>
        </div>
    )
}

export default ShoppingPage
