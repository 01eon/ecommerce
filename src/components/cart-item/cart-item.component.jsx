import { CartItemContainer, CartItemImg, ItemDetails } from  "./cart-item.styles";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImg src={imageUrl} alt={name} />
      <ItemDetails>
        <span> {name} </span>
        <span>{quantity} &times; ${price} </span>
      </ItemDetails>
    </CartItemContainer>
  ); 
};

export default CartItem;
