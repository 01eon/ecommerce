import { useDispatch, useSelector } from 'react-redux';
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';

import Button, { BUTTON_TYPES_CLASSES } from '../button/button.component';

import { addItemToCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selector"


const ProductCard = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)

    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemToCart(cartItems, product))
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`} />
            <Footer>
                <Name>{name}</Name>
                <Price>{price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}> Add to Cart </Button>
        </ProductCardContainer>
    )
}
 
export default ProductCard;