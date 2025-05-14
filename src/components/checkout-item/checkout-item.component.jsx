import {
  CheckoutItemContainer,
  CheckoutImageContainer,
  CheckoutImg,
  CheckoutName,
  CheckoutQuantity,
  QuantityArr,
  QuantityVal,
  CheckoutPrice,
  CheckoutRemoveButton,
} from "./checkout-item.styles";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems)

  
  const { name, imageUrl, price, quantity } = cartItem;

  const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

  return (
    <CheckoutItemContainer>
      <CheckoutImageContainer>
        <CheckoutImg src={imageUrl} alt={name} />
      </CheckoutImageContainer>
      <CheckoutName>{name}</CheckoutName>
      <CheckoutQuantity>
        <QuantityArr onClick={removeItemHandler}>
          &#10094;
        </QuantityArr>
        <QuantityVal> {quantity} </QuantityVal>
        <QuantityArr onClick={addItemHandler}>
          &#10095;
        </QuantityArr>
      </CheckoutQuantity>
      <CheckoutPrice>${price.toFixed(2)}</CheckoutPrice>
      <CheckoutRemoveButton onClick={clearItemHandler}>
        &#10005;
      </CheckoutRemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
