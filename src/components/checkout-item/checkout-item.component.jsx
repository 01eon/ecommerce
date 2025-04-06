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

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemToCart } =
    useContext(CartContext);
  const { name, imageUrl, price, quantity } = cartItem;

  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemToCart(cartItem);
  const clearItemHandler = () => clearItemFromCart(cartItem);

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
