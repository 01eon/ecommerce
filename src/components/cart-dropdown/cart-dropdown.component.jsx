import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

 
import { CartDropdownContainer, CartItems, CartButton } from './cart-dropdown.styles';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { CartContext } from '../../contexts/cart.context';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </CartItems>
            <CartButton as={Button} onClick={goToCheckoutHandler}> Go to Checkout </CartButton>
        </CartDropdownContainer>
    )
}

export default CartDropdown;