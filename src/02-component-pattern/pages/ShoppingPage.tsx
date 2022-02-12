import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components'
import '../styles/custom-style.css';

const product = {
    id: "1",
    title: "Coffe Mug",
    img: "./coffee-mug.png"
}

const ShoppingPage = () => {
    return (
        <div  >
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

                <ProductCard product={product} className="bg-dark text-white " >
                    <ProductImage 
                        
                        className='custom-image'
                        style={{
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
                        }} 
                    />
                    <ProductTitle title="Hola Mundo" className="text-bold" />
                    <ProductButtons className="custom-buttons" />
                </ProductCard>

                <ProductCard product={product} style={{
                    backgroundColor: '#70D1F8'
                }} >
                    <ProductImage
                        style={{
                            boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)'
                        }}
                    />
                    <ProductTitle
                        style={{
                            fontWeight: 'bold'
                        }}
                    />
                    <ProductButtons
                        style={{
                            display: 'flex',
                            justifyContent: 'end'
                        }}
                    />
                </ProductCard>

            </div>
        </div>
    )
}

export default ShoppingPage
