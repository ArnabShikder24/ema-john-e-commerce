import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { addToDb, deleteShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();

    const addToCart = (clickedProduct) => {
        let newCart = [];
        const exists = cart.find(product => product.id === clickedProduct.id);
        if(!exists) {
            clickedProduct.quantity = 1;
            newCart = [...cart, clickedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== clickedProduct.id);
            exists.quantity += 1
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(clickedProduct.id)
    }

    const clearCart = () => {
        setCart([])
        deleteShoppingCart()
    }

    return (
        <div className='shop-container'>
            <div className="product-flex">
                <div className='products-container'>
                    {
                        products.map(product => <Product
                            product={product}
                            key={product.id}
                            addToCart={addToCart}
                            ></Product>
                        )
                    }
                </div>      
            </div>
            <div className="cart-container">          
                <Cart clearCart={clearCart} cart={cart}>
                    <button onClick={() => navigate('/orders')} style={{background: '#FF9900'}}>
                        Review Order
                        <FontAwesomeIcon style={{paddingLeft: '5px'}} icon={faArrowRight}></FontAwesomeIcon>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;